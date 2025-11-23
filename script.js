// script.js — cliente para enviar o formulário para um endpoint que insere no BigQuery


const form = document.getElementById('signup-form');
const timesGroup = document.getElementById('times-group');
const yearEl = document.getElementById('year');
const resultEl = document.getElementById('form-result');


yearEl.textContent = new Date().getFullYear();


form.addEventListener('change', (e) => {
const terco = form.querySelector('[name="flg_disparo_terco"]').checked;
const oracao = form.querySelector('[name="flg_disparo_oracao_dormir"]').checked;
if (terco || oracao) timesGroup.classList.remove('hidden');
else timesGroup.classList.add('hidden');
});


form.addEventListener('submit', async (e) => {
e.preventDefault();
resultEl.textContent = '';


const data = new FormData(form);
const payload = {
nome: data.get('nome') || '',
email: data.get('email') || '',
celular: data.get('celular') || '',


flg_disparo_terco: data.get('flg_disparo_terco') ? 1 : 0,
horario_disparo_terco: data.get('horario_disparo_terco') || null,


flg_disparo_angelus: data.get('flg_disparo_angelus') ? 1 : 0,


flg_disparo_oracao_dormir: data.get('flg_disparo_oracao_dormir') ? 1 : 0,
horario_disparo_oracao_dormir: data.get('horario_disparo_oracao_dormir') || null,
oracao_dormir: data.get('oracao_dormir') || null,


flg_disparo_santos: data.get('flg_disparo_santos') ? 1 : 0,
horario_disparo_santos: data.get('horario_disparo_santos') || null,
vetor_santos: (data.get('vetor_santos') || '').split(',').map(s => s.trim()).filter(Boolean),


flg_disparo_email: data.get('flg_disparo_email') ? 1 : 0,
flg_disparo_sms: data.get('flg_disparo_sms') ? 1 : 0,
flg_disparo_wpp: data.get('flg_disparo_wpp') ? 1 : 0,


flg_usuario_ativo: 1,
timestamp_criacao: new Date().toISOString(),
};


// Substitua a URL abaixo pelo endpoint que fará a inserção no BigQuery
const ENDPOINT = 'https://YOU