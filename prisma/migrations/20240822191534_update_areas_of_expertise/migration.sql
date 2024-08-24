-- CreateTable
CREATE TABLE "Mentor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "is_premium" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "availability" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "studentId" INTEGER NOT NULL,
    "mentorId" INTEGER NOT NULL,
    "time_slot" TEXT NOT NULL,
    "is_confirmed" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Booking_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Booking_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AreaOfInterest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "interest" TEXT NOT NULL,
    "studentId" INTEGER NOT NULL,
    CONSTRAINT "AreaOfInterest_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AreasOfExpertise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "expertise" TEXT NOT NULL,
    "mentorId" INTEGER NOT NULL,
    CONSTRAINT "AreasOfExpertise_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
