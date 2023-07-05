import path from "path";
import multer from "multer";
import { unlink } from "fs";
import { createRouter } from "next-connect";
import sharp from "sharp";

const router = createRouter();

const ACCESS_PATH = "/uploads";
const UPLOAD_DIR = "./public/uploads";

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_DIR);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName = file.originalname
      .replace(fileExt, "")
      .toLowerCase()
      .split(" ")
      .join("-");
    cb(null, fileName + fileExt);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (![".jpeg", ".jpg", ".png"].includes(ext)) {
      return cb(new Error("Only jpg, jpeg, png is allowed"), false);
    }
    cb(null, true);
  }
});

var uploadSingle = multer({ storage: storage }).single("file");

router.post((req, res) => {
  uploadSingle(req, res, err => {
    if (err) return res.status(500).json(err);

    if (res.req.file) {
      const filename = res.req.file.filename;
      const filePath = ACCESS_PATH + "/" + filename;
      const small =
        "/uploads/small/" + filename.split(".")[0] + ".jpeg";
      const squar =
        "/uploads/squar/" + filename.split(".")[0] + ".jpeg";

      convertImage(filename, small, squar);

      res.json({ filePath, small, squar });
    } else {
      res.status(500).json({ message: "Please try again!" });
    }
  });
});

const convertImage = async (filename, small, squar) => {
  try {
    const _dir = UPLOAD_DIR + "/" + filename;
    const meta = await sharp(_dir).metadata();

    await sharp(_dir)
      .resize(
        meta.width > 640 ? 640 : meta.width,
        meta.height > 394 ? 394 : meta.height
      )
      .toFormat("jpeg")
      .jpeg({ quality: 80 })
      .toFile("public" + small);
    await sharp(_dir)
      .resize(
        meta.width > 640 ? 640 : meta.width,
        meta.height > 800 ? 800 : meta.height
      )
      .toFormat("jpeg")
      .jpeg({ quality: 80 })
      .toFile("public" + squar);
  } catch (err) {
    console.log("Error! creating small image", err);
  }
};

router.delete(async (req, res) => {
  const { filePath } = req.query;

  if (!filePath) {
    return res.status(404).json({ message: "File path missing!" });
  }

  const fileDir = "./public" + filePath;
  unlink(fileDir, err => {
    if (err) {
      return res.status(204).json({ err });
    }
    try {
      unlink(getSmallImgPath(filePath), err => {});
    } catch (e) {}
    res.status(204).end();
  });
});

const getSmallImgPath = filePath => {
  const filename = filePath.replace("/uploads/", "");
  const ext = filename.split(".")[0];
  const sm = filename.replace(ext, "") + ".jpeg";
  return "./public/uploads/small/" + sm;
};

// Required!
export const config = {
  api: {
    bodyParser: false // Disallow body parsing, consume as stream
  }
};

// We can use multer as a middleware as well
// apiRoute.use(upload.array('file')); // attribute name you are sending the file by
// apiRoute.post((req, res) => {
//   res.status(200).json({ data: `/uploads/${filename}` }); // response
// });

// preflight response to prevent CORS issue
// router.use((req, res) => {
//   res.status(200).end();
// });

router.all((req, res, next) => {
  if (req.method === "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({ error: err.message });
  },
  onNoMatch(req, res) {
    res
      .status(405)
      .json({ error: `Method '${req.method}' Not Allowed` });
  }
});
