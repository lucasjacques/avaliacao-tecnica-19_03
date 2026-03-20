SELECT 
    COUNT(*) AS quantidade_usuarios_zerados
FROM usuarios
WHERE saldo = 0;