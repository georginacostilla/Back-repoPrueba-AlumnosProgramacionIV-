BEGIN;

ALTER TABLE "Libro"
  DROP CONSTRAINT "Libro_autorId_fkey",
  DROP COLUMN "autorId",
  ADD COLUMN "autor" VARCHAR(100) NOT NULL;

ALTER TABLE "Publicacion"
  DROP CONSTRAINT "Publicacion_autorId_fkey",
  DROP COLUMN "autorId",
  ADD COLUMN "autor" VARCHAR(100) NOT NULL;

ALTER TABLE "Tesis"
  DROP CONSTRAINT "Tesis_autorId_fkey",
  DROP COLUMN "autorId",
  ADD COLUMN "autor" VARCHAR(100) NOT NULL;

COMMIT;
