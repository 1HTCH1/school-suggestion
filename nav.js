// ============================================
// 공통 내비게이션 드로어
// 각 페이지에서 renderNav('write' | 'my' | 'board' | 'admin', isAdmin) 호출
// ============================================

function renderNav(activeKey, isAdmin) {
  const items = [
    { key: 'write', href: 'write.html', label: '건의하기' },
    { key: 'my', href: 'my.html', label: '내 건의사항 · 처리현황' },
    { key: 'board', href: 'board.html', label: '반영사례 게시판' },
  ];
  if (isAdmin) {
    items.push({ key: 'admin', href: 'admin.html', label: '관리자 페이지' });
  }

  const linksHtml = items.map(item => `
    <a href="${item.href}" class="${item.key === activeKey ? 'active' : ''}">${item.label}</a>
  `).join('');

  const drawerHtml = `
    <div class="nav-overlay" id="nav-overlay" onclick="closeNav()"></div>
    <div class="nav-drawer" id="nav-drawer">
      <div class="drawer-brand"><span class="seal">함</span>한국나노마이스터고 건의함</div>
      ${linksHtml}
      <hr class="drawer-divider" />
      <div class="drawer-footer">
        <button class="drawer-logout" onclick="handleLogout()">로그아웃</button>
      </div>
    </div>
  `;

  document.getElementById('nav-root').innerHTML = drawerHtml;
}

function openNav() {
  document.getElementById('nav-overlay').classList.add('open');
  document.getElementById('nav-drawer').classList.add('open');
}

function closeNav() {
  document.getElementById('nav-overlay').classList.remove('open');
  document.getElementById('nav-drawer').classList.remove('open');
}

async function handleLogout() {
  await supabaseClient.auth.signOut();
  window.location.href = 'index.html';
}
