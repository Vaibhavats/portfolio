export const projects = [
  {
    id: 1,
    title: "Hybrid CNN–ViT Plant Disease Detection",
    description:
      "PyTorch research project combining a CNN backbone with a Vision Transformer and dual attention (CBAM) for plant disease classification on PlantVillage. Trained and compared four models, ran an ablation analysis, and wrote the results up as a research paper.",
    tags: ["PyTorch", "CNN", "Vision Transformer", "CBAM", "PlantVillage"],
    icon: "🌿",
    color: "#34D399",
    github: "https://github.com/Vaibhavats/hybrid-cnn-vit-plant-disease",
    demo: null,
  },
  {
    id: 2,
    title: "Data Cleaning RL Environment",
    description:
      "An OpenEnv-spec reinforcement learning environment where agents learn to clean messy customer datasets. Three graded tasks (missing values, outliers and dtype fixes, a full CRM pipeline) with dense step rewards and a 0–1 grader; a rule-based baseline scores 0.88 on average.",
    tags: ["Python", "FastAPI", "Pydantic", "Docker", "RL"],
    icon: "🧹",
    color: "#F59E0B",
    github: "https://github.com/Vaibhavats/data-cleaning-openenv",
    demo: null,
  },
  {
    id: 3,
    title: "Smart AI Trip Planner",
    description:
      "Generates personalized 2–3 day itineraries with a local LLM (Mistral via Ollama), so there is no API cost. A modular LangChain agent extracts the city from free-form input and calls tools for hotels, weather and places; tool outputs are currently simulated for offline stability, with real APIs planned.",
    tags: ["Python", "LangChain", "Ollama", "Mistral"],
    icon: "✈️",
    color: "#6C63FF",
    github: "https://github.com/Vaibhavats/SmartTripAI",
    demo: null,
  },
  {
    id: 4,
    title: "PitchSap Chat Application",
    description:
      "Full-stack MERN chat application with real-time messaging and secure JWT authentication. Designed a RESTful Express API and tuned its middleware and queries, cutting average response latency by 25%.",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    icon: "💬",
    color: "#A78BFA",
    github: "https://github.com/Vaibhavats/pitchsap-landing-redesign",
    demo: "https://pitchsap-landing-redesign.vercel.app/",
  },
  {
    id: 5,
    title: "Face Recognition Attendance System",
    description:
      "Real-time face recognition for institutional presence verification, built in Python with the face_recognition library and a live webcam feed. Designed to cope with varying lighting, occlusions and processing speed.",
    tags: ["Python", "OpenCV", "face_recognition"],
    icon: "🤖",
    color: "#6C63FF",
    github: "https://github.com/Vaibhavats/Face_Recognition_Model",
    demo: null,
  },
  {
    id: 6,
    title: "Selenium Automation Framework",
    description:
      "Java test automation framework for the OrangeHRM demo app using Selenium 4, TestNG and Maven. Page Object Model, thread-safe parallel runs via ThreadLocal WebDriver, Excel-driven test data (Apache POI), screenshot-on-failure embedded in Extent Reports, and a headless mode for CI.",
    tags: ["Java", "Selenium", "TestNG", "Maven"],
    icon: "⚡",
    color: "#34D399",
    github: "https://github.com/Vaibhavats/Selenium-TestNG-OrangeHRM-Framework",
    demo: null,
  },
];
