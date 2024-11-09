import { FooterSection } from '../../types';

const sections: FooterSection[] = [
  { title: 'Platform', links: ['Games', 'Achievements', 'Leaderboard'] },
  { title: 'Resources', links: ['Blog', 'Developers', 'Support'] },
  { title: 'Company', links: ['About', 'Careers', 'Contact'] },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="mb-4 font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="transition-colors hover:text-purple-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p>&copy; 2023 Gamera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
