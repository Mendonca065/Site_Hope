import { Container } from "../shared/Container";
import { FadeInSection } from "../shared/FadeInSection";

const features = [
	{
		icon: (
			<span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2D2D2D]">
				<svg
					width="32"
					height="32"
					fill="none"
					viewBox="0 0 24 24"
					stroke="#FF9800"
					strokeWidth="2"
				>
					<path d="M7 10a4 4 0 1 1 8 0v2a4 4 0 1 1-8 0v-2Z" />
					<circle cx="12" cy="10" r="4" />
				</svg>
			</span>
		),
		title: "Conexão",
		desc: "Faça novos amigos, estabeleça parcerias e conheça evangelistas que estão fazendo a diferença em nossa geração.",
	},
	{
		icon: (
			<span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2D2D2D]">
				<svg
					width="32"
					height="32"
					fill="none"
					viewBox="0 0 24 24"
					stroke="#FF9800"
					strokeWidth="2"
				>
					<path d="M12 2v20M2 12h20" />
				</svg>
			</span>
		),
		title: "Novas Ideias",
		desc: "Aprenda com quem está fazendo e desenvolva novas ideias e abordagens para seu ministério.",
	},
	{
		icon: (
			<span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2D2D2D]">
				<svg
					width="32"
					height="32"
					fill="none"
					viewBox="0 0 24 24"
					stroke="#FF9800"
					strokeWidth="2"
				>
					<circle cx="12" cy="12" r="10" />
					<path d="M12 8v4l3 3" />
				</svg>
			</span>
		),
		title: "Pregadores Impactantes",
		desc: "Todos os palestrantes são evangelistas de experiência e impacto que vão comunicar a vivência missionária na prática.",
	},
	{
		icon: (
			<span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2D2D2D]">
				<svg
					width="32"
					height="32"
					fill="none"
					viewBox="0 0 24 24"
					stroke="#FF9800"
					strokeWidth="2"
				>
					<path d="M12 20v-6m0 0V4m0 10h8m-8 0H4" />
				</svg>
			</span>
		),
		title: "Transformação",
		desc: "Oportunidade de crescimento no chamado de Deus para sua vida na área de evangelismo.",
	},
];

export const WhatToExpect = () => (
	<section className="pt-0 pb-0 bg-transparent mx-2 md:mx-8 mt-[-5rem] relative z-10">
		<Container>
			<FadeInSection>
				<div className="max-w-6xl mx-auto shadow-2xl bg-[#232323] rounded-b-3xl rounded-t-none border-t-0 border-b-2 border-x-2 border-[#FF9800]/10 -mt-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-10">
						{/* Texto principal */}
						<div>
							<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
								O QUE ESPERAR DO{" "}
								<span className="text-[#FF9800]">HOPE</span>
							</h2>
							<p className="text-lg text-gray-300 mt-6">
								Uma oportunidade única de se conectar e aprender de evangelistas de
								impacto global!
							</p>
						</div>
						{/* Features */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
							{features.map((f, i) => (
								<div key={i} className="flex flex-col items-start gap-2">
									{f.icon}
									<h3 className="text-xl font-bold text-white mt-4">
										{f.title}
									</h3>
									<p className="text-gray-400 text-base">{f.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</FadeInSection>
		</Container>
	</section>
);
