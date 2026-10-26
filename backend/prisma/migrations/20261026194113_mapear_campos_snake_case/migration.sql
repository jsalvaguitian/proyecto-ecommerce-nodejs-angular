/*
  Warnings:

  - You are about to drop the column `creadaEn` on the `categorias` table. All the data in the column will be lost.
  - You are about to drop the column `pedidoId` on the `detalles_pedido` table. All the data in the column will be lost.
  - You are about to drop the column `precioUnitario` on the `detalles_pedido` table. All the data in the column will be lost.
  - You are about to drop the column `productoId` on the `detalles_pedido` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `actualizadoEn` on the `productos` table. All the data in the column will be lost.
  - You are about to drop the column `creadoEn` on the `productos` table. All the data in the column will be lost.
  - You are about to drop the column `publicIdOriginal` on the `productos` table. All the data in the column will be lost.
  - You are about to drop the column `publicIdPreview` on the `productos` table. All the data in the column will be lost.
  - You are about to drop the column `creadoEn` on the `refresh_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `expiraEn` on the `refresh_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `reemplazadoPorId` on the `refresh_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `revocadoEn` on the `refresh_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `sesionId` on the `refresh_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `tokenHash` on the `refresh_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `utilizadoEn` on the `refresh_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `actividadEn` on the `sesiones_auth` table. All the data in the column will be lost.
  - You are about to drop the column `creadaEn` on the `sesiones_auth` table. All the data in the column will be lost.
  - You are about to drop the column `expiraEn` on the `sesiones_auth` table. All the data in the column will be lost.
  - You are about to drop the column `motivoRevocacion` on the `sesiones_auth` table. All the data in the column will be lost.
  - You are about to drop the column `revocadaEn` on the `sesiones_auth` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `sesiones_auth` table. All the data in the column will be lost.
  - You are about to drop the column `creadoEn` on the `tokens_recuperacion` table. All the data in the column will be lost.
  - You are about to drop the column `expiraEn` on the `tokens_recuperacion` table. All the data in the column will be lost.
  - You are about to drop the column `tokenHash` on the `tokens_recuperacion` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `tokens_recuperacion` table. All the data in the column will be lost.
  - You are about to drop the column `utilizadoEn` on the `tokens_recuperacion` table. All the data in the column will be lost.
  - You are about to drop the column `actualizadoEn` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `creadoEn` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `passwordHash` on the `usuarios` table. All the data in the column will be lost.
  - You are about to alter the column `nombre` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - A unique constraint covering the columns `[pedido_id,producto_id]` on the table `detalles_pedido` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[token_hash]` on the table `refresh_tokens` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[token_hash]` on the table `tokens_recuperacion` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pedido_id` to the `detalles_pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio_unitario` to the `detalles_pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `producto_id` to the `detalles_pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualizado_en` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `public_id_original` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `public_id_preview` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expira_en` to the `refresh_tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sesion_id` to the `refresh_tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token_hash` to the `refresh_tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expira_en` to the `sesiones_auth` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `sesiones_auth` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expira_en` to the `tokens_recuperacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token_hash` to the `tokens_recuperacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `tokens_recuperacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualizado_en` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `apellido` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `direccion` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password_hash` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "detalles_pedido" DROP CONSTRAINT "detalles_pedido_pedidoId_fkey";

-- DropForeignKey
ALTER TABLE "detalles_pedido" DROP CONSTRAINT "detalles_pedido_productoId_fkey";

-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "refresh_tokens" DROP CONSTRAINT "refresh_tokens_sesionId_fkey";

-- DropForeignKey
ALTER TABLE "sesiones_auth" DROP CONSTRAINT "sesiones_auth_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "tokens_recuperacion" DROP CONSTRAINT "tokens_recuperacion_usuarioId_fkey";

-- DropIndex
DROP INDEX "detalles_pedido_pedidoId_productoId_key";

-- DropIndex
DROP INDEX "detalles_pedido_productoId_idx";

-- DropIndex
DROP INDEX "pedidos_usuarioId_idx";

-- DropIndex
DROP INDEX "refresh_tokens_expiraEn_idx";

-- DropIndex
DROP INDEX "refresh_tokens_reemplazadoPorId_idx";

-- DropIndex
DROP INDEX "refresh_tokens_sesionId_idx";

-- DropIndex
DROP INDEX "refresh_tokens_tokenHash_key";

-- DropIndex
DROP INDEX "sesiones_auth_expiraEn_idx";

-- DropIndex
DROP INDEX "sesiones_auth_usuarioId_idx";

-- DropIndex
DROP INDEX "tokens_recuperacion_expiraEn_idx";

-- DropIndex
DROP INDEX "tokens_recuperacion_tokenHash_key";

-- DropIndex
DROP INDEX "tokens_recuperacion_usuarioId_idx";

-- AlterTable
ALTER TABLE "categorias" DROP COLUMN "creadaEn",
ADD COLUMN     "creada_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "detalles_pedido" DROP COLUMN "pedidoId",
DROP COLUMN "precioUnitario",
DROP COLUMN "productoId",
ADD COLUMN     "pedido_id" INTEGER NOT NULL,
ADD COLUMN     "precio_unitario" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "producto_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "usuarioId",
ADD COLUMN     "usuario_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "productos" DROP COLUMN "actualizadoEn",
DROP COLUMN "creadoEn",
DROP COLUMN "publicIdOriginal",
DROP COLUMN "publicIdPreview",
ADD COLUMN     "actualizado_en" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "public_id_original" TEXT NOT NULL,
ADD COLUMN     "public_id_preview" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "refresh_tokens" DROP COLUMN "creadoEn",
DROP COLUMN "expiraEn",
DROP COLUMN "reemplazadoPorId",
DROP COLUMN "revocadoEn",
DROP COLUMN "sesionId",
DROP COLUMN "tokenHash",
DROP COLUMN "utilizadoEn",
ADD COLUMN     "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expira_en" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "reemplazado_por_id" INTEGER,
ADD COLUMN     "revocado_en" TIMESTAMP(3),
ADD COLUMN     "sesion_id" INTEGER NOT NULL,
ADD COLUMN     "token_hash" TEXT NOT NULL,
ADD COLUMN     "utilizado_en" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "sesiones_auth" DROP COLUMN "actividadEn",
DROP COLUMN "creadaEn",
DROP COLUMN "expiraEn",
DROP COLUMN "motivoRevocacion",
DROP COLUMN "revocadaEn",
DROP COLUMN "usuarioId",
ADD COLUMN     "actividad_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "creada_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expira_en" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "motivo_revocacion" TEXT,
ADD COLUMN     "revocada_en" TIMESTAMP(3),
ADD COLUMN     "usuario_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "tokens_recuperacion" DROP COLUMN "creadoEn",
DROP COLUMN "expiraEn",
DROP COLUMN "tokenHash",
DROP COLUMN "usuarioId",
DROP COLUMN "utilizadoEn",
ADD COLUMN     "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expira_en" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "token_hash" TEXT NOT NULL,
ADD COLUMN     "usuario_id" INTEGER NOT NULL,
ADD COLUMN     "utilizado_en" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "actualizadoEn",
DROP COLUMN "creadoEn",
DROP COLUMN "passwordHash",
ADD COLUMN     "actualizado_en" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "apellido" VARCHAR(100) NOT NULL,
ADD COLUMN     "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "direccion" TEXT NOT NULL,
ADD COLUMN     "password_hash" TEXT NOT NULL,
ALTER COLUMN "nombre" SET DATA TYPE VARCHAR(100);

-- CreateIndex
CREATE INDEX "detalles_pedido_producto_id_idx" ON "detalles_pedido"("producto_id");

-- CreateIndex
CREATE UNIQUE INDEX "detalles_pedido_pedido_id_producto_id_key" ON "detalles_pedido"("pedido_id", "producto_id");

-- CreateIndex
CREATE INDEX "pedidos_usuario_id_idx" ON "pedidos"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_token_hash_key" ON "refresh_tokens"("token_hash");

-- CreateIndex
CREATE INDEX "refresh_tokens_sesion_id_idx" ON "refresh_tokens"("sesion_id");

-- CreateIndex
CREATE INDEX "refresh_tokens_expira_en_idx" ON "refresh_tokens"("expira_en");

-- CreateIndex
CREATE INDEX "refresh_tokens_reemplazado_por_id_idx" ON "refresh_tokens"("reemplazado_por_id");

-- CreateIndex
CREATE INDEX "sesiones_auth_usuario_id_idx" ON "sesiones_auth"("usuario_id");

-- CreateIndex
CREATE INDEX "sesiones_auth_expira_en_idx" ON "sesiones_auth"("expira_en");

-- CreateIndex
CREATE UNIQUE INDEX "tokens_recuperacion_token_hash_key" ON "tokens_recuperacion"("token_hash");

-- CreateIndex
CREATE INDEX "tokens_recuperacion_usuario_id_idx" ON "tokens_recuperacion"("usuario_id");

-- CreateIndex
CREATE INDEX "tokens_recuperacion_expira_en_idx" ON "tokens_recuperacion"("expira_en");

-- AddForeignKey
ALTER TABLE "tokens_recuperacion" ADD CONSTRAINT "tokens_recuperacion_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalles_pedido" ADD CONSTRAINT "detalles_pedido_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalles_pedido" ADD CONSTRAINT "detalles_pedido_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sesiones_auth" ADD CONSTRAINT "sesiones_auth_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_sesion_id_fkey" FOREIGN KEY ("sesion_id") REFERENCES "sesiones_auth"("id") ON DELETE CASCADE ON UPDATE CASCADE;
