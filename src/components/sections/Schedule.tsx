import { Container } from "../shared/Container";
import { FadeInSection } from "../shared/FadeInSection";

const schedule = [
	{
		day: "DIA 1",
		date: "25/09",
		weekday: "QUINTA-FEIRA",
		color: "bg-[#232F3E] text-white",
		time: "DAS 19:30 ÀS 21:45",
		image: "/event-images/hope1.jpg",
		blocks: [
			{ time: "18h30", desc: "Abertura dos portões" },
			{ time: "19h30", desc: "Abertura do evento" },
			{ time: "19h40", desc: "Louvor" },
			{ time: "20h40", desc: "Palavra" },
			{ time: "21h30", desc: "Apelo" },
			{ time: "21h45", desc: "Final" },
		],
	},
	{
		day: "DIA 2",
		date: "26/09",
		weekday: "SEXTA-FEIRA",
		color: "bg-[#FF9800] text-white",
		time: "DAS 19:30 ÀS 21:45",
		image: "/event-images/hope2.jpg",
		blocks: [
			{ time: "18h30", desc: "Abertura dos portões" },
			{ time: "19h30", desc: "Abertura do 2º dia" },
			{ time: "19h40", desc: "Louvor" },
			{ time: "20h40", desc: "Palavra" },
			{ time: "21h30", desc: "Apelo" },
			{ time: "21h45", desc: "Final" },
		],
	},
	{
		day: "DIA 3",
		date: "27/09",
		weekday: "SÁBADO (VIGÍLIA)",
		color: "bg-[#232F3E] text-white",
		time: "DAS 22:00 ÀS 05:00",
		image: "/event-images/bebel.jpg",
		blocks: [
			{ time: "22h", desc: "Abertura do evento" },
			{ time: "22h20", desc: "Louvor" },
			{ time: "23h20", desc: "Palavra" },
			{ time: "00h20", desc: "Momento de oração" },
			{ time: "00h40", desc: "Louvor" },
			{ time: "2h", desc: "Pausa" },
			{ time: "3h", desc: "Surpresa" },
			{ time: "3h40", desc: "Louvor" },
			{ time: "4h", desc: "Palavra" },
			{ time: "4h40", desc: "Apelo e louvor final" },
			{ time: "5h", desc: "Final" },
		],
	},
];

export const Schedule = () => (
	<section className="py-16 bg-transparent mt-[-5rem]">
		<Container>
			<FadeInSection>
				<h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
					AGENDA <span className="text-[#FF9800]">HOPE</span>
				</h2>
				<div className="flex flex-col gap-10">
					{schedule.map((item, idx) => (
						<div
							key={idx}
							className="flex flex-col md:flex-row rounded-3xl shadow-xl overflow-hidden bg-[#232323]"
						>
							<div
								className={`relative flex flex-col items-center justify-center min-w-[180px] px-8 py-10 gap-4 font-bold text-center text-lg md:text-xl ${item.color}`}
								style={{
									backgroundImage: `linear-gradient(rgba(30,30,30,0.7), rgba(30,30,30,0.7)), url(${item.image})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
								}}
							>
								<span className="uppercase tracking-widest text-base md:text-lg drop-shadow-lg">
									{item.weekday}
								</span>
								<span className="text-xs font-normal mt-2 drop-shadow-lg">
									{item.time}
								</span>
							</div>
							<div className="flex-1 bg-[#232323] p-8 flex flex-col justify-center">
								<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
									{item.day}{" "}
									<span className="text-[#FF9800]">- {item.date}</span>
								</h3>
								<ul className="space-y-2">
									{item.blocks.map((block, i) => (
										<li key={i} className="flex gap-4 items-center">
											<span className="text-[#FF9800] font-bold min-w-[70px] text-lg">
												{block.time}
											</span>
											<span className="text-gray-200 text-base">
												{block.desc}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</FadeInSection>
		</Container>
	</section>
);
