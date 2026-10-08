package main

import (
	"fmt"
	htmlTemplate "html/template"
	"log"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"text/template"
	textTemplate "text/template"
)

type Link struct {
	Label string
	URL   string
}

type Date struct {
	Year  int
	Month string
}

type Summary struct {
	Title string
	Body  string
}

type JobProject struct {
	Title string
	Items []string
}

type Job struct {
	Title     string
	Employer  string
	Location  string
	Note      string
	StartDate Date
	EndDate   *Date
	Projects  []JobProject
}

type Project struct {
	Name        string
	Description string
	Link        Link
}

type Education struct {
	Name        string
	Status      string
	Institution string
	StartDate   Date
	EndDate     *Date
}

type Skill struct {
	Name  string
	Items []string
}

type Language struct {
	Name  string
	Level string
}

type Section[T any] struct {
	Title string
	Data  T
}

type Meta struct {
	Language string
	Site     Link
}

type Info struct {
	Name     string
	Slug     string
	Title    string
	Skills   []string
	Location string
	Links    []Link
}

type Data struct {
	Meta       Meta
	Info       Info
	Summary    Section[string]
	Experience Section[[]Job]
	Projects   Section[[]Project]
	Educations Section[[]Education]
	Skills     Section[[]Skill]
	Languages  Section[[]Language]
}

func compileTeX(dir string) {
	if err := os.Chdir(dir); err != nil {
		log.Fatal(err)
	}
	if err := exec.Command("latexmk", "-pdf").Run(); err != nil {
		log.Fatal(err)
	}
}

func generateHTML(dir string, data Data, tmpl *htmlTemplate.Template) {
	fileName := filepath.Join(dir, fmt.Sprintf("index-%s.html", data.Meta.Language))
	file, err := os.OpenFile(fileName, os.O_CREATE|os.O_WRONLY, os.ModePerm)
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	if err = tmpl.Execute(file, data); err != nil {
		log.Fatal(err)
	}
}

func generateTeX(dir string, data Data, tmpl *textTemplate.Template) {
	fileName := filepath.Join(dir, fmt.Sprintf("cv-%s.tex", data.Meta.Language))
	file, err := os.OpenFile(fileName, os.O_CREATE|os.O_WRONLY, os.ModePerm)
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	if err = tmpl.Execute(file, data); err != nil {
		log.Fatal(err)
	}

}

func ensureDir(dir string) {
	if _, err := os.Stat(dir); !os.IsNotExist(err) {
		os.RemoveAll(dir)
	}
	if err := os.Mkdir(dir, os.ModePerm); err != nil {
		log.Fatal(err)
	}
}

func main() {
	const HTML_DIR = "html"
	const CV_DIR = "cv"
	const MAIN_HTML_FILE = "main.html.tmpl"
	const MAIN_TEX_FILE = "main.tex.tmpl"
	const TEX_DELIM_LEFT = "<<"
	const TEX_DELIM_RIGHT = ">>"

	funcs := template.FuncMap{
		"tex": strings.NewReplacer(
			`\`, `\textbackslash{}`, `&`, `\&`, `%`, `\%`, `$`, `\$`, `#`, `\#`,
			`_`, `\_`, `{`, `\{`, `}`, `\}`, `~`, `\textasciitilde{}`, `^`, `\textasciicircum{}`,
		).Replace,
	}

	ensureDir(HTML_DIR)
	ensureDir(CV_DIR)

	htmlTmpl, err := htmlTemplate.ParseFiles(MAIN_HTML_FILE)
	if err != nil {
		log.Fatal(err)
	}

	texTmpl, err := textTemplate.New(MAIN_TEX_FILE).Delims(TEX_DELIM_LEFT, TEX_DELIM_RIGHT).Funcs(funcs).ParseFiles(MAIN_TEX_FILE)
	if err != nil {
		log.Fatal(err)
	}

	for _, data := range []Data{
		{
			Meta: Meta{
				Language: "en",
				Site:     Link{"www.xeraph.dev", "https://www.xeraph.dev"},
			},
			Info: Info{
				Name:     "Adrian René López Cintas",
				Slug:     "adrian-rene-lopez-cintas",
				Title:    "Fullstack Engineer",
				Skills:   []string{"Go", "React", "SQL"},
				Location: "Havana, Cuba",
				Links: []Link{
					{Label: "xeraphdev@gmail.com", URL: "mailto:xeraphdev@gmail.com"},
					{Label: "github.com/xeraph-dev", URL: "https://github.com/xeraph-dev"},
					{Label: "linkedin.com/in/adrian-lópez", URL: "https://www.linkedin.com/in/adrian-l%C3%B3pez/"},
				},
			},
			Summary: Section[string]{
				Title: "Summary",
				Data:  "Self-taught fullstack engineer with 3 years of Go and SQL on the back end and 6 years of React on the front end, with experience in query performance optimization on large datasets, accessible web interfaces, and migrating legacy applications to React. Currently in the second year of a BSc in Mathematics.",
			},
			Experience: Section[[]Job]{
				Title: "Experience",
				Data: []Job{
					{
						Title:     "Web Developer (Go / React)",
						Employer:  "Divertimento",
						Location:  "Remote",
						StartDate: Date{2022, "November"},
						EndDate:   &Date{2025, "November"},
						Projects: []JobProject{
							{
								Title: "Healthcare care-management platform",
								Items: []string{
									"Worked on a Go microservice acting as a backend-for-frontend (gateway) for the platform's web application, loading large volumes of data from another microservice.",
									"Helped implement the back-end logic of a task-generation system: staff define patient criteria, the system generates follow-up lists, and a detail view lets them contact patients and record outcomes.",
									"Implemented caching strategies in the service's own PostgreSQL database to avoid repeatedly loading large datasets from the upstream service.",
									"Fixed a production report page that timed out on every request: it joined 10 tables over millions of rows against a 30 s limit. Redesigned the queries with CTEs and tighter joins, plus pagination and precise filters, bringing response times to 5–20 s depending on the filter volume. Before, it was slow regardless of how few results it returned.",
									"Designed a reusable Go abstraction for dynamic filtering and pagination over large tables.",
									"Reduced load in many other queries by narrowing the working set early instead of expanding rows and filtering afterwards.",
								},
							},
							{
								Title: "Other Projects",
								Items: []string{
									"Built a full portal from scratch in Astro, implementing a provided design.",
									"Built the landing page for a product launch using Laravel.",
									"Worked on the front end of migrating a legacy .NET application to React.",
									"Migrated an end-to-end test suite from Cucumber to Cypress.",
								},
							},
						},
					},
					{
						Title:     "Front-end Developer (React)",
						Employer:  "Freelance",
						Location:  "Remote",
						StartDate: Date{2022, "September"},
						EndDate:   &Date{2022, "November"},
						Projects: []JobProject{
							{
								Items: []string{
									"Contributed to the front end of a web page for designing databases without needing to know SQL.",
									"Wrote Cypress end-to-end tests for every new feature and bug fix, so that fixed issues could not regress.",
									"Improved site performance with React best practices; contributed to core product development.",
								},
							},
						},
					},
					{
						Title:     "Web Developer (PHP / React)",
						Employer:  "Divertimento",
						Location:  "Remote",
						StartDate: Date{2022, "March"},
						EndDate:   &Date{2022, "August"},
						Projects: []JobProject{
							{
								Title: "School e-learning platform",
								Items: []string{
									"Built core features of an online course platform developed for a single school.",
									"Worked under strict WCAG AA accessibility requirements, testing with screen readers on Windows and VoiceOver on macOS to reproduce and fix assistive-technology issues.",
									"Implemented an in-house text-highlighting library from scratch as part of the project's own component set.",
									"Integrated with Java/Spring Boot microservices, occasionally modifying their code.",
								},
							},
						},
					},
					{
						Title:     "Front-end Developer (React)",
						Employer:  "IJP Software",
						Location:  "Remote",
						Note:      "Part-time at first",
						StartDate: Date{2021, "July"},
						EndDate:   &Date{2022, "July"},
						Projects: []JobProject{
							{
								Items: []string{
									"Worked on a platform built around dynamically generated forms: forms arrived as structured data and the front end rebuilt the UI from them at runtime.",
									"Contributed to the front end of an e-commerce site built with Vue.",
									"Built a mobile app with the core team in a hackathon, working on both the front end (React Native) and the back end (Express).",
									"Contributed to a React Native music-purchasing app.",
								},
							},
						},
					},
					{
						Title:     "Front-end Developer (React)",
						Employer:  "Freelance",
						Location:  "Remote",
						Note:      "Part-time",
						StartDate: Date{2020, "July"},
						EndDate:   &Date{2021, "July"},
						Projects: []JobProject{
							{
								Items: []string{
									"Built small JavaScript and React projects for clients.",
									"Wrote a script to add watermarks to videos, which led to a client getting back in touch two years later.",
								},
							},
						},
					},
					{
						Title:     "Drupal Developer",
						Employer:  "Xetid",
						Location:  "Havana, Cuba",
						StartDate: Date{2019, "October"},
						EndDate:   &Date{2021, "August"},
						Projects: []JobProject{
							{
								Items: []string{
									"Built two government websites from scratch.",
									"Developed a Drupal module for user authentication through EnZona, a Cuban digital payments platform.",
									"Maintained and extended existing government websites by adding new features.",
								},
							},
						},
					},
				},
			},
			Projects: Section[[]Project]{
				Title: "Projects",
				Data: []Project{
					{
						Name:        "Guardias",
						Description: "cross-platform desktop scheduling app in Tcl/Tk, built as a single static binary; in active development.",
						Link:        Link{"github.com/xeraph-dev/guardias", "https://github.com/xeraph-dev/guardias"},
					},
					{
						Name:        "Sudoku",
						Description: "desktop sudoku game built with Svelte and Tauri.",
						Link:        Link{"github.com/xeraph-dev/sudoku", "https://github.com/xeraph-dev/sudoku"},
					},
					{
						Name:        "text-highlighter",
						Description: "text-highlighting library written from scratch for the e-learning platform.",
						Link:        Link{"github.com/xeraph-dev/text-highlighter", "https://github.com/xeraph-dev/text-highlighter"},
					},
					{
						Name:        "Channels Watcher Bot",
						Description: "Telegram bot (Python, Prisma, Docker) that watches channels and forwards messages matching each user's filters.",
						Link:        Link{"github.com/xeraph-dev/channels-watcher-bot", "https://github.com/xeraph-dev/channels-watcher-bot"},
					},
					{
						Name:        "SRI",
						Description: "information retrieval system for documents based on the vector space model (Python), built in my first year at university.",
						Link:        Link{"github.com/xeraph-dev/sri", "https://github.com/xeraph-dev/sri"},
					},
					{
						Name:        "Space Invaders",
						Description: "game written in Racket as the final project of How to Design Programs.",
						Link:        Link{"github.com/xeraph-dev/space-invaders.rkt", "https://github.com/xeraph-dev/space-invaders.rkt"},
					},
					{
						Name:        "VSCode Profile Manager",
						Description: "macOS app in Swift for managing Visual Studio Code profiles.",
						Link:        Link{"github.com/xeraph-dev/vscode-profile-manager-macos", "https://github.com/xeraph-dev/vscode-profile-manager-macos"},
					},
					{
						Name:        "Rick and Morty",
						Description: "macOS client for the Rick and Morty API, written in Swift.",
						Link:        Link{"github.com/xeraph-dev/rick-and-morty-macos", "https://github.com/xeraph-dev/rick-and-morty-macos"},
					},
					{
						Name:        "BettyCook",
						Description: "mobile recipe-book app built with Flutter.",
						Link:        Link{"github.com/xeraph-dev/bettycook", "https://github.com/xeraph-dev/bettycook"},
					},
				},
			},
			Educations: Section[[]Education]{
				Title: "Education",
				Data: []Education{
					{
						Name:        "BSc in Mathematics",
						Status:      "in progress",
						Institution: "University of Havana",
						StartDate:   Date{2025, "September"},
					},
				},
			},
			Skills: Section[[]Skill]{
				Title: "Skills",
				Data: []Skill{
					{
						Name:  "Back-end",
						Items: []string{"Go", "SQL (PostgreSQL, MySQL)", "REST APIs", "Node.js/Express", "Docker", "Linux"},
					},
					{
						Name:  "Front-end",
						Items: []string{"React", "React Native", "JavaScript", "TypeScript", "Next.js", "Vue", "accessibility (WCAG AA)", "end-to-end testing (Cypress)"},
					},
					{
						Name:  "Other",
						Items: []string{"Git", "Tcl/Tk", "Python", "Bash", "PHP", "Haskell", "Racket", "Swift", "Flutter", "Drupal"},
					},
					{
						Name:  "Platforms",
						Items: []string{"GitHub", "Vercel", "Hostinger", "Jira"},
					},
					{
						Name:  "Methodologies",
						Items: []string{"Scrum", "Waterfall"},
					},
				},
			},
			Languages: Section[[]Language]{
				Title: "Languages",
				Data: []Language{
					{
						Name:  "Spanish",
						Level: "native",
					},
					{
						Name:  "English",
						Level: "intermediate",
					},
				},
			},
		},
		{
			Meta: Meta{
				Language: "es",
				Site:     Link{"www.xeraph.dev", "https://www.xeraph.dev"},
			},
			Info: Info{
				Name:     "Adrian René López Cintas",
				Slug:     "adrian-rene-lopez-cintas",
				Title:    "Ingeniero Fullstack",
				Skills:   []string{"Go", "React", "SQL"},
				Location: "La Habana, Cuba",
				Links: []Link{
					{Label: "xeraphdev@gmail.com", URL: "mailto:xeraphdev@gmail.com"},
					{Label: "github.com/xeraph-dev", URL: "https://github.com/xeraph-dev"},
					{Label: "linkedin.com/in/adrian-lópez", URL: "https://www.linkedin.com/in/adrian-l%C3%B3pez/"},
				},
			},
			Summary: Section[string]{
				Title: "Resumen",
				Data:  "Ingeniero fullstack autodidacta con 3 años de Go y SQL en el back end y 6 años de React en el front end, con experiencia en optimización del rendimiento de consultas sobre grandes conjuntos de datos, interfaces web accesibles y migración de aplicaciones heredadas a React. Actualmente cursando el segundo año de una Licenciatura en Matemáticas.",
			},
			Experience: Section[[]Job]{
				Title: "Experiencia",
				Data: []Job{
					{
						Title:     "Desarrollador Web (Go / React)",
						Employer:  "Divertimento",
						Location:  "Remoto",
						StartDate: Date{2022, "noviembre"},
						EndDate:   &Date{2025, "noviembre"},
						Projects: []JobProject{
							{
								Title: "Plataforma de gestión de atención médica",
								Items: []string{
									"Trabajé en un microservicio en Go que actuaba como backend-for-frontend (gateway) para la aplicación web de la plataforma, cargando grandes volúmenes de datos desde otro microservicio.",
									"Ayudé a implementar la lógica de back end de un sistema de generación de tareas: el personal define criterios de pacientes, el sistema genera listas de seguimiento y una vista de detalle les permite contactar a los pacientes y registrar resultados.",
									"Implementé estrategias de caché en la base de datos PostgreSQL propia del servicio para evitar cargar repetidamente grandes conjuntos de datos desde el servicio upstream.",
									"Arreglé una página de reportes en producción que excedía el tiempo de espera en cada petición: unía 10 tablas sobre millones de filas contra un límite de 30 s. Rediseñé las consultas con CTEs y joins más ajustados, además de paginación y filtros precisos, reduciendo los tiempos de respuesta a 5–20 s según el volumen de filtros. Antes era lenta independientemente de cuán pocos resultados devolviera.",
									"Diseñé una abstracción reutilizable en Go para filtrado dinámico y paginación sobre tablas grandes.",
									"Reduje la carga en muchas otras consultas al acotar el conjunto de trabajo desde el inicio en lugar de expandir filas y filtrar después.",
								},
							},
							{
								Title: "Otros proyectos",
								Items: []string{
									"Construí un portal completo desde cero en Astro, implementando un diseño proporcionado.",
									"Construí la landing page para el lanzamiento de un producto usando Laravel.",
									"Trabajé en el front end de la migración de una aplicación heredada en .NET a React.",
									"Migré una suite de pruebas end-to-end de Cucumber a Cypress.",
								},
							},
						},
					},
					{
						Title:     "Desarrollador Front-end (React)",
						Employer:  "Freelance",
						Location:  "Remoto",
						StartDate: Date{2022, "septiembre"},
						EndDate:   &Date{2022, "noviembre"},
						Projects: []JobProject{
							{
								Items: []string{
									"Contribuí al front end de una página web para diseñar bases de datos sin necesidad de saber SQL.",
									"Escribí pruebas end-to-end con Cypress para cada nueva funcionalidad y corrección de errores, para que los problemas corregidos no volvieran a aparecer.",
									"Mejoré el rendimiento del sitio con buenas prácticas de React; contribuí al desarrollo del producto principal.",
								},
							},
						},
					},
					{
						Title:     "Desarrollador Web (PHP / React)",
						Employer:  "Divertimento",
						Location:  "Remoto",
						StartDate: Date{2022, "marzo"},
						EndDate:   &Date{2022, "agosto"},
						Projects: []JobProject{
							{
								Title: "Plataforma de aprendizaje en línea para una escuela",
								Items: []string{
									"Construí funcionalidades centrales de una plataforma de cursos en línea desarrollada para una sola escuela.",
									"Trabajé bajo estrictos requisitos de accesibilidad WCAG AA, probando con lectores de pantalla en Windows y VoiceOver en macOS para reproducir y corregir problemas de tecnologías de asistencia.",
									"Implementé desde cero una librería interna de resaltado de texto como parte del conjunto de componentes propios del proyecto.",
									"Me integré con microservicios Java/Spring Boot, modificando ocasionalmente su código.",
								},
							},
						},
					},
					{
						Title:     "Desarrollador Front-end (React)",
						Employer:  "IJP Software",
						Location:  "Remoto",
						Note:      "Medio tiempo al principio",
						StartDate: Date{2021, "julio"},
						EndDate:   &Date{2022, "julio"},
						Projects: []JobProject{
							{
								Items: []string{
									"Trabajé en una plataforma construida en torno a formularios generados dinámicamente: los formularios llegaban como datos estructurados y el front end reconstruía la interfaz a partir de ellos en tiempo de ejecución.",
									"Contribuí al front end de un sitio de comercio electrónico construido con Vue.",
									"Construí una aplicación móvil con el equipo principal en un hackathon, trabajando tanto en el front end (React Native) como en el back end (Express).",
									"Contribuí a una aplicación de compra de música en React Native.",
								},
							},
						},
					},
					{
						Title:     "Desarrollador Front-end (React)",
						Employer:  "Freelance",
						Location:  "Remoto",
						Note:      "Medio tiempo",
						StartDate: Date{2020, "julio"},
						EndDate:   &Date{2021, "julio"},
						Projects: []JobProject{
							{
								Items: []string{
									"Construí pequeños proyectos en JavaScript y React para clientes.",
									"Escribí un script para agregar marcas de agua a videos, lo que hizo que un cliente volviera a contactarme dos años después.",
								},
							},
						},
					},
					{
						Title:     "Desarrollador Drupal",
						Employer:  "Xetid",
						Location:  "La Habana, Cuba",
						StartDate: Date{2019, "octubre"},
						EndDate:   &Date{2021, "agosto"},
						Projects: []JobProject{
							{
								Items: []string{
									"Construí dos sitios web gubernamentales desde cero.",
									"Desarrollé un módulo de Drupal para autenticación de usuarios a través de EnZona, una plataforma cubana de pagos digitales.",
									"Mantuve y amplié sitios web gubernamentales existentes agregando nuevas funcionalidades.",
								},
							},
						},
					},
				},
			},
			Projects: Section[[]Project]{
				Title: "Proyectos",
				Data: []Project{
					{
						Name:        "Guardias",
						Description: "aplicación de escritorio multiplataforma para gestión de horarios en Tcl/Tk, compilada como un único binario estático; en desarrollo activo.",
						Link:        Link{"github.com/xeraph-dev/guardias", "https://github.com/xeraph-dev/guardias"},
					},
					{
						Name:        "Sudoku",
						Description: "juego de sudoku de escritorio construido con Svelte y Tauri.",
						Link:        Link{"github.com/xeraph-dev/sudoku", "https://github.com/xeraph-dev/sudoku"},
					},
					{
						Name:        "text-highlighter",
						Description: "librería de resaltado de texto escrita desde cero para la plataforma de aprendizaje en línea.",
						Link:        Link{"github.com/xeraph-dev/text-highlighter", "https://github.com/xeraph-dev/text-highlighter"},
					},
					{
						Name:        "Channels Watcher Bot",
						Description: "bot de Telegram (Python, Prisma, Docker) que observa canales y reenvía mensajes que coinciden con los filtros de cada usuario.",
						Link:        Link{"github.com/xeraph-dev/channels-watcher-bot", "https://github.com/xeraph-dev/channels-watcher-bot"},
					},
					{
						Name:        "SRI",
						Description: "sistema de recuperación de información para documentos basado en el modelo de espacio vectorial (Python), construido en mi primer año de universidad.",
						Link:        Link{"github.com/xeraph-dev/sri", "https://github.com/xeraph-dev/sri"},
					},
					{
						Name:        "Space Invaders",
						Description: "juego escrito en Racket como proyecto final de How to Design Programs.",
						Link:        Link{"github.com/xeraph-dev/space-invaders.rkt", "https://github.com/xeraph-dev/space-invaders.rkt"},
					},
					{
						Name:        "VSCode Profile Manager",
						Description: "aplicación macOS en Swift para gestionar perfiles de Visual Studio Code.",
						Link:        Link{"github.com/xeraph-dev/vscode-profile-manager-macos", "https://github.com/xeraph-dev/vscode-profile-manager-macos"},
					},
					{
						Name:        "Rick and Morty",
						Description: "cliente macOS para la API de Rick and Morty, escrito en Swift.",
						Link:        Link{"github.com/xeraph-dev/rick-and-morty-macos", "https://github.com/xeraph-dev/rick-and-morty-macos"},
					},
					{
						Name:        "BettyCook",
						Description: "aplicación móvil de recetario construida con Flutter.",
						Link:        Link{"github.com/xeraph-dev/bettycook", "https://github.com/xeraph-dev/bettycook"},
					},
				},
			},
			Educations: Section[[]Education]{
				Title: "Educación",
				Data: []Education{
					{
						Name:        "Licenciatura en Matemáticas",
						Status:      "en curso",
						Institution: "Universidad de La Habana",
						StartDate:   Date{2025, "septiembre"},
					},
				},
			},
			Skills: Section[[]Skill]{
				Title: "Habilidades",
				Data: []Skill{
					{
						Name:  "Back-end",
						Items: []string{"Go", "SQL (PostgreSQL, MySQL)", "REST APIs", "Node.js/Express", "Docker", "Linux"},
					},
					{
						Name:  "Front-end",
						Items: []string{"React", "React Native", "JavaScript", "TypeScript", "Next.js", "Vue", "accesibilidad (WCAG AA)", "pruebas end-to-end (Cypress)"},
					},
					{
						Name:  "Otros",
						Items: []string{"Git", "Tcl/Tk", "Python", "Bash", "PHP", "Haskell", "Racket", "Swift", "Flutter", "Drupal"},
					},
					{
						Name:  "Plataformas",
						Items: []string{"GitHub", "Vercel", "Hostinger", "Jira"},
					},
					{
						Name:  "Metodologías",
						Items: []string{"Scrum", "Cascada"},
					},
				},
			},
			Languages: Section[[]Language]{
				Title: "Idiomas",
				Data: []Language{
					{
						Name:  "Español",
						Level: "nativo",
					},
					{
						Name:  "Inglés",
						Level: "intermedio",
					},
				},
			},
		},
	} {
		generateHTML(HTML_DIR, data, htmlTmpl)
		generateTeX(CV_DIR, data, texTmpl)
	}
	compileTeX(CV_DIR)
}
