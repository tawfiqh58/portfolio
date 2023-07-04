-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectId" TEXT NOT NULL,
    "slugId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "publishedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "Project_slugId_fkey" FOREIGN KEY ("slugId") REFERENCES "Slug" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MainImage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "src" TEXT NOT NULL,
    "small" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "MainImage_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("projectId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Slug" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "current" TEXT NOT NULL,
    "projectId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slugId" INTEGER NOT NULL,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "Category_slugId_fkey" FOREIGN KEY ("slugId") REFERENCES "Slug" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Category_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("projectId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_projectId_key" ON "Project"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "Project_slugId_key" ON "Project"("slugId");

-- CreateIndex
CREATE UNIQUE INDEX "MainImage_projectId_key" ON "MainImage"("projectId");
