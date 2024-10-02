import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <footer className="rounded-xl shadow m-4 bg-slate-900">
                <div className="text-gray-400 w-full mx-auto max-w-screen-xl p-4 flex justify-evenly gap-5">
                    <span className="text-sm">
                        <a
                            href="https://diegopagotto.me/"
                            className="hover:underline"
                        >
                            Made with 💙 by Diego Pagotto
                        </a>
                    </span>
                    <a
                        href="https://github.com/DiegoPagotto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        title="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-lg" />
                    </a>
                    <a
                        href="https://linkedin.com/in/diego-pagotto/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        title="LinkedIn"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="text-lg"
                        />
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Footer;
