export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold text-foreground">Mr Idealhhat</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Transforming businesses with AI automation solutions that reduce costs, save time, and enhance customer satisfaction.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-chatbots">
                  AI Chatbots
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-call">
                  Call Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-workflow">
                  Workflow Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-customer">
                  Customer Service AI
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#industries" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-industries">
                  Industries
                </a>
              </li>
              <li>
                <a href="#results" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-results">
                  Results
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Mr Idealhhat. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
