-- CreateTable
CREATE TABLE `PatientAccount` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` TIMESTAMP(6) NOT NULL,
    `email` VARCHAR(320) NOT NULL,
    `name` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `PatientAccount_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
