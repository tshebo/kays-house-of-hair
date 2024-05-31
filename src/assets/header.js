import React, { useEffect } from 'react';

const HeaderLogic = () => {
  useEffect(() => {
    const handlePreloader = () => {
      const preloader = document.querySelector('#preloader');
      if (preloader) {
        preloader.remove();
      }
    };

    const handleStickyHeader = () => {
      const selectHeader = document.querySelector('#header');
      if (selectHeader) {
        document.addEventListener('scroll', () => {
          window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
        });
      }
    };

    const handleMobileNavToggle = () => {
      const mobileNavShow = document.querySelector('.mobile-nav-show');
      const mobileNavHide = document.querySelector('.mobile-nav-hide');

      document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
        el.addEventListener('click', (event) => {
          event.preventDefault();
          document.body.classList.toggle('mobile-nav-active');
          mobileNavShow.classList.toggle('d-none');
          mobileNavHide.classList.toggle('d-none');
        });
      });
    };

    const handleHashLinkClick = () => {
      document.querySelectorAll('#navbar a').forEach(navbarlink => {
        if (!navbarlink.hash) return;
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
        navbarlink.addEventListener('click', () => {
          if (document.querySelector('.mobile-nav-active')) {
            document.body.classList.remove('mobile-nav-active');
            document.querySelector('.mobile-nav-show').classList.remove('d-none');
            document.querySelector('.mobile-nav-hide').classList.add('d-none');
          }
        });
      });
    };

    const handleDropdownToggle = () => {
      const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

      navDropdowns.forEach(el => {
        el.addEventListener('click', function(event) {
          if (document.querySelector('.mobile-nav-active')) {
            event.preventDefault();
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('dropdown-active');

            let dropDownIndicator = this.querySelector('.dropdown-indicator');
            dropDownIndicator.classList.toggle('bi-chevron-up');
            dropDownIndicator.classList.toggle('bi-chevron-down');
          }
        });
      });
    };

    // Call all functions when component mounts
    handlePreloader();
    handleStickyHeader();
    handleMobileNavToggle();
    handleHashLinkClick();
    handleDropdownToggle();

    // Clean up event listeners when component unmounts
    return () => {
      document.removeEventListener('scroll', handleStickyHeader);
      document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
        el.removeEventListener('click', handleMobileNavToggle);
      });
      document.querySelectorAll('#navbar a').forEach(navbarlink => {
        navbarlink.removeEventListener('click', handleHashLinkClick);
      });
      document.querySelectorAll('.navbar .dropdown > a').forEach(el => {
        el.removeEventListener('click', handleDropdownToggle);
      });
    };
  }, []);

  return null;
};

export default HeaderLogic;
