-- AlterTable
ALTER TABLE `prospecto` ADD COLUMN `usuarioCapturoId` INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE `Usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NULL,
    `ap_paterno` VARCHAR(191) NULL,
    `ap_materno` VARCHAR(191) NULL,
    `nombre_usuario` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Prospecto` ADD CONSTRAINT `Prospecto_usuarioCapturoId_fkey` FOREIGN KEY (`usuarioCapturoId`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
