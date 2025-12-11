import { Link } from "react-router-dom";
import footerConfig, { utils, styles } from "../config/footer";

export default function Footer() {
  const { company, social, links, partners, newsletter, payment, legal } =
    footerConfig;

  const currentYear = utils.getCurrentYear();

  return (
    <footer className={styles.container}>
      <div className="container mx-auto px-4 py-8">
        <div className={styles.grid}>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-3xl">{company.logo}</div>
              <div>
                <h3 className="text-xl font-bold">{company.name}</h3>
                <p className="text-sm opacity-75">{company.tagline}</p>
              </div>
            </div>
            <p className="text-sm">{company.description}</p>

            <div className="space-y-2 text-sm">
              <p>
                📧{" "}
                <a href={`mailto:${company.email}`} className="link link-hover">
                  {company.email}
                </a>
              </p>
              <p>
                📞{" "}
                <a href={`tel:${company.phone}`} className="link link-hover">
                  {utils.formatPhone(company.phone)}
                </a>
              </p>
              <p>
                📍 <span className="opacity-75">{company.address}</span>
              </p>
              <p>
                ⏰ <span className="opacity-75">{company.workingHours}</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className={styles.sectionTitle}>{links.useful.title}</h4>
            <ul className="space-y-2">
              {links.useful.items.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className="link link-hover opacity-75 hover:opacity-100 flex items-center gap-2"
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className={`${styles.sectionTitle} mt-6`}>
              {links.legal.title}
            </h4>
            <ul className="space-y-2">
              {links.legal.items.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className="link link-hover opacity-75 hover:opacity-100 text-sm flex items-center gap-2"
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.sectionTitle}>{partners.title}</h4>
            <div className="space-y-3">
              {partners.sponsors.map((partner, index) => (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.partnerCard} flex items-center gap-3`}
                >
                  <div className="text-2xl">{partner.logo}</div>
                  <div>
                    <h5 className="font-semibold">{partner.name}</h5>
                    <p className="text-xs opacity-75">{partner.description}</p>
                    <span className="badge badge-outline badge-xs mt-1">
                      {partner.category}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 space-y-2">
              <h4 className="font-semibold">{newsletter.title}</h4>
              <p className="text-sm opacity-75">{newsletter.description}</p>
              <div className="join">
                <input
                  type="email"
                  placeholder={newsletter.placeholder}
                  className="input input-bordered join-item flex-1"
                />
                <button className="btn btn-primary join-item">
                  {newsletter.buttonIcon} {newsletter.buttonText}
                </button>
              </div>
            </div>
          </div>

          <div>
            <h4 className={styles.sectionTitle}>{social.title}</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {social.networks.map((network, index) => (
                <a
                  key={index}
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialButton} ${network.color} tooltip`}
                  data-tip={network.tooltip}
                >
                  <span className="text-xl">{network.icon}</span>
                </a>
              ))}
            </div>

            <h4 className={styles.sectionTitle}>{payment.title}</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {payment.methods.map((method, index) => (
                <div key={index} className="tooltip" data-tip={method.name}>
                  <div className={`${styles.paymentBadge} ${method.color}`}>
                    {utils.getPaymentLogo(method.logo)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {currentYear} {company.name}. {legal.copyright}
            </p>
            <div className="text-xs opacity-75 mt-1 space-y-1">
              <p>
                {legal.developedBy} • Версия {company.version}
              </p>
              <p>{legal.designBy}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {[
              ...links.useful.items.slice(0, 3),
              ...links.legal.items.slice(0, 2),
            ].map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className="text-xs link link-hover opacity-75 hover:opacity-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-xs opacity-50">{legal.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
