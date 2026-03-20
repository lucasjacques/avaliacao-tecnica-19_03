-- ============================================
-- Script: consultas.sql
-- Descrição: Consultas básicas na tabela usuarios
-- ============================================

-- Contexto:
-- Tabela: usuarios
-- Campos: id, nome, email, saldo

--------------------------------------------------
-- 1. Selecionar usuários com saldo > 1000
--------------------------------------------------
SELECT
    id,
    nome,
    email,
    saldo
FROM usuarios
WHERE saldo > 1000;


--------------------------------------------------
-- 2. Atualizar saldo de um usuário específico
--------------------------------------------------
-- Exemplo: atualizar saldo do usuário da recrutadora que está conduzindo meu processo seletivo

BEGIN;

UPDATE usuarios
SET saldo = 1500
WHERE name = "Clara Souza";

-- Opcional: verificar resultado antes de confirmar
SELECT * FROM usuarios WHERE name = "Clara Souza";

COMMIT;

-- Caso queira desfazer:
-- ROLLBACK;


--------------------------------------------------
-- 3. Contar usuários com saldo = 0
--------------------------------------------------
SELECT 
    COUNT(*) AS quantidade_usuarios_zerados
FROM usuarios
WHERE saldo = 0;
