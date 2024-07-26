import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';

type Props = {
	children: React.ReactNode;
	showHero?: boolean;
};

const AppLayout = ({ children, showHero = false }: Props) => {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="relative">
				<Header />
				{showHero && <Hero />}
			</div>
			<div className="container mx-auto flex-1 py-10 ">{children}</div>
			<Footer />
		</div>
	);
};

export default AppLayout;
