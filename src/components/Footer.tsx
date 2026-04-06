const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heading text-lg font-bold text-foreground">KANE</span>
        <span className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kane Walker. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
