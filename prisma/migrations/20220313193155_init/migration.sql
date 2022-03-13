-- CreateTable
CREATE TABLE `EstatusProspecto` (
    `id` INTEGER NOT NULL,
    `estatus` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Prospecto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `ap_paterno` VARCHAR(191) NOT NULL,
    `ap_materno` VARCHAR(191) NULL,
    `calle` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `colonia` VARCHAR(191) NOT NULL,
    `codigo_postal` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `rfc` VARCHAR(191) NOT NULL,
    `estatusProspectoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Documentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_documento` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `prospectoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Prospecto` ADD CONSTRAINT `Prospecto_estatusProspectoId_fkey` FOREIGN KEY (`estatusProspectoId`) REFERENCES `EstatusProspecto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Documentos` ADD CONSTRAINT `Documentos_prospectoId_fkey` FOREIGN KEY (`prospectoId`) REFERENCES `Prospecto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
