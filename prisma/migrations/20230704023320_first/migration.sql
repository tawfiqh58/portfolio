-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "projectId" TEXT NOT NULL,
    "slugId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MainImage" (
    "id" SERIAL NOT NULL,
    "src" TEXT NOT NULL,
    "small" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "MainImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slug" (
    "id" SERIAL NOT NULL,
    "current" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "Slug_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "slugId" INTEGER NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_projectId_key" ON "Project"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "Project_slugId_key" ON "Project"("slugId");

-- CreateIndex
CREATE UNIQUE INDEX "MainImage_projectId_key" ON "MainImage"("projectId");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_slugId_fkey" FOREIGN KEY ("slugId") REFERENCES "Slug"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MainImage" ADD CONSTRAINT "MainImage_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("projectId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_slugId_fkey" FOREIGN KEY ("slugId") REFERENCES "Slug"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("projectId") ON DELETE RESTRICT ON UPDATE CASCADE;
