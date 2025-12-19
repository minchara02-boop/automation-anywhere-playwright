class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goToApp() {
    await this.page.goto(
      'https://community.cloud.automationanywhere.digital',
      { waitUntil: 'domcontentloaded' }
    );
  }
}

module.exports = { LoginPage };
