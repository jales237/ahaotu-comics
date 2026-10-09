const providersData = {
  NG: ["GTBank", "Access Bank", "Zenith Bank", "OPay", "PalmPay", "Moniepoint", "UBA", "First Bank", "Kuda Bank"],
  GH: ["MTN MoMo", "Telecel Cash", "AT Money", "Fidelity Bank Ghana"],
  ZA: ["Standard Bank", "FNB", "Absa", "Capitec"],
  KE: ["Safaricom M-Pesa", "Airtel Money", "Equity Bank", "KCB Bank"],
  CM: ["MTN MoMo", "Orange Money", "Dizpay", "Smobilpay"]
};

function updateProviders() {
  const countrySelect = document.getElementById('country-select').value;
  const providerSelect = document.getElementById('provider-select');
  
  providerSelect.innerHTML = '<option value="" disabled selected>Choose your bank/network...</option>';
  providerSelect.disabled = false;

  if (providersData[countrySelect]) {
    providersData[countrySelect].forEach(provider => {
      const opt = document.createElement('option');
      opt.value = provider;
      opt.textContent = provider;
      providerSelect.appendChild(opt);
    });
  }
}

function openModal(id) {
  document.getElementById(id).classList.add('active');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

function goToJoinModal() {
  const country = document.getElementById('country-select').value;
  const provider = document.getElementById('provider-select').value;
  const account = document.getElementById('payout-account').value;
  
  if(!country || !provider || !account) {
    alert('Please complete all payout fields.');
    return;
  }
  
  if(account.length < 10) {
    alert('Account number or ID must be at least 10 characters.');
    return;
  }

  closeModal('setup-modal');
  openModal('join-modal');
}

function triggerAuthFlow(providerName) {
  closeModal('join-modal');
  
  const overlay = document.getElementById('loading-overlay');
  const spinnerBox = document.getElementById('spinner-container');
  const checkMarkBox = document.getElementById('check-container');
  const title = document.getElementById('loading-title');
  const subtitle = document.getElementById('loading-subtitle');

  spinnerBox.style.display = 'block';
  checkMarkBox.style.display = 'none';
  title.textContent = `Connecting with ${providerName}...`;
  subtitle.textContent = 'Securing your Ahaotu Creator Account & Payout Gateway';
  
  overlay.classList.add('active');
  
  setTimeout(() => {
    spinnerBox.style.display = 'none';
    checkMarkBox.style.display = 'block';
    title.textContent = 'Account Verified! 🎉';
    subtitle.textContent = 'Welcome back, Jales Creator!';
  }, 1600);

  setTimeout(() => {
    overlay.classList.remove('active');
    alert('🎉 Successfully authenticated via ' + providerName + '! PalmPay payout target active.');
  }, 2800);
}

function toggleSidebar() {
  document.getElementById('side-drawer').classList.toggle('active');
  document.getElementById('sidebar-overlay').classList.toggle('active');
}

function installPWA() {
  alert('Ahaotu Comics is ready! Add this page to your home screen via your browser menu.');
}
