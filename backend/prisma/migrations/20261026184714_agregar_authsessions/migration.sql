-- CreateTable
CREATE TABLE "sesiones_auth" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "creadaEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actividadEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiraEn" TIMESTAMP(3) NOT NULL,
    "revocadaEn" TIMESTAMP(3),
    "motivoRevocacion" TEXT,

    CONSTRAINT "sesiones_auth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refresh_tokens" (
    "id" SERIAL NOT NULL,
    "sesionId" INTEGER NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiraEn" TIMESTAMP(3) NOT NULL,
    "utilizadoEn" TIMESTAMP(3),
    "revocadoEn" TIMESTAMP(3),
    "reemplazadoPorId" INTEGER,

    CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "sesiones_auth_usuarioId_idx" ON "sesiones_auth"("usuarioId");

-- CreateIndex
CREATE INDEX "sesiones_auth_expiraEn_idx" ON "sesiones_auth"("expiraEn");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_tokenHash_key" ON "refresh_tokens"("tokenHash");

-- CreateIndex
CREATE INDEX "refresh_tokens_sesionId_idx" ON "refresh_tokens"("sesionId");

-- CreateIndex
CREATE INDEX "refresh_tokens_expiraEn_idx" ON "refresh_tokens"("expiraEn");

-- CreateIndex
CREATE INDEX "refresh_tokens_reemplazadoPorId_idx" ON "refresh_tokens"("reemplazadoPorId");

-- AddForeignKey
ALTER TABLE "sesiones_auth" ADD CONSTRAINT "sesiones_auth_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_sesionId_fkey" FOREIGN KEY ("sesionId") REFERENCES "sesiones_auth"("id") ON DELETE CASCADE ON UPDATE CASCADE;
