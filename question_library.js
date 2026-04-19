// question_library.js
// EXCELLENT INSTITUTE - ULTIMATE MASTER QUESTION BANK

// ========================================================================
// 1. INITIALIZE THE MASTER OBJECT (DO NOT TOUCH THIS PART)
// ========================================================================
const questionBank = {
    computer: {},
    reasoning: {}
};

// ========================================================================
// 2. BATCH 1 QUESTIONS
// ========================================================================

// --- COMPUTER: SET 1 (Hardware & Fundamentals) ---
questionBank.computer.set1 = [
    { q: "Who is known as the father of the computer?", options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"], ans: 1, exp: "Charles Babbage designed the Analytical Engine in the 1830s." },
    { q: "What does CPU stand for?", options: ["Central Process Unit", "Computer Personal Unit", "Central Processing Unit", "Central Processor Unit"], ans: 2, exp: "It is the primary component that acts as the computer's brain." },
    { q: "Which of the following is considered an input device?", options: ["Monitor", "Printer", "Keyboard", "Speaker"], ans: 2, exp: "A keyboard is used to manually enter data into the system." },
    { q: "Which type of memory is volatile (loses data when powered off)?", options: ["ROM", "Hard Drive", "Flash Drive", "RAM"], ans: 3, exp: "Random Access Memory requires continuous power to hold data." },
    { q: "The physical, tangible parts of a computer are called?", options: ["Software", "Hardware", "Firmware", "Malware"], ans: 1, exp: "Hardware refers to physical components like the monitor and motherboard." },
    { q: "Which of the following is an output device?", options: ["Microphone", "Mouse", "Scanner", "Monitor"], ans: 3, exp: "A monitor takes digital data and outputs it as a visual display." },
    { q: "A computer mouse is primarily what kind of device?", options: ["Storage", "Output", "Pointing / Input", "Processing"], ans: 2, exp: "A mouse is a pointing input device." },
    { q: "1 Byte is exactly equal to how many bits?", options: ["4 bits", "8 bits", "16 bits", "32 bits"], ans: 1, exp: "1 Byte consists of exactly 8 binary digits (bits)." },
    { q: "The keys on the top of the keyboard labeled F1 to F12 are called:", options: ["Number keys", "Special keys", "Function keys", "Navigation keys"], ans: 2, exp: "These are Function keys, programmable for software shortcuts." },
    { q: "What is the smallest unit of data in a computer?", options: ["Byte", "Bit", "Nibble", "Pixel"], ans: 1, exp: "A Bit (binary digit) is the most basic unit, representing a 0 or 1." },
    { q: "Restarting a computer that is already turned on is called:", options: ["Cold booting", "Warm booting", "Shutting down", "Logging off"], ans: 1, exp: "Warm booting involves restarting the OS without cutting physical power." },
    { q: "What is the standard layout name for a common English keyboard?", options: ["AZERTY", "QWERTY", "DVORAK", "ABCDE"], ans: 1, exp: "QWERTY is named after the first six letters on the upper row." },
    { q: "Which device is used to enter human voice or sound into the computer?", options: ["Speaker", "Microphone", "Webcam", "Monitor"], ans: 1, exp: "A microphone is an audio input device." },
    { q: "What does 'PC' typically stand for?", options: ["Private Computer", "Personal Computer", "Professional Computer", "Primary Computer"], ans: 1, exp: "PC stands for Personal Computer." },
    { q: "Which key is used to delete characters to the left of the cursor?", options: ["Delete", "Backspace", "Spacebar", "Shift"], ans: 1, exp: "Backspace deletes left; Delete removes characters to the right." },
    { q: "Which component supplies power to all other parts of a computer?", options: ["Motherboard", "CPU", "PSU (Power Supply Unit)", "RAM"], ans: 2, exp: "The PSU converts wall AC power to regulated DC power." },
    { q: "What is the primary function of a barcode reader?", options: ["To print labels", "To scan and input data from barcodes", "To emit sound", "To store data"], ans: 1, exp: "It is an optical scanner that reads printed barcodes." },
    { q: "Which of these is NOT an output device?", options: ["Plotter", "Speaker", "Projector", "Scanner"], ans: 3, exp: "A scanner inputs physical documents digitally." },
    { q: "The blinking symbol on the computer screen indicating where text will go is called?", options: ["Mouse", "Logo", "Hand", "Cursor"], ans: 3, exp: "The cursor indicates the active input position." },
    { q: "What does UPS stand for in computer hardware?", options: ["Universal Power Supply", "Uninterruptible Power Supply", "United Parcel Service", "Unique Power System"], ans: 1, exp: "A UPS provides emergency battery backup." }
];

// --- COMPUTER: SET 2 (OS, UI & MS Office) ---
questionBank.computer.set2 = [
    { q: "What does GUI stand for?", options: ["General User Instruction", "Graphical User Interface", "Global Utility Interface", "Graph User Internet"], ans: 1, exp: "GUI allows interaction via visual elements like windows and icons." },
    { q: "What is the primary function of an Operating System?", options: ["Word processing", "Managing hardware and software resources", "Browsing the internet", "Virus protection"], ans: 1, exp: "The OS is the fundamental software managing all hardware." },
    { q: "What is the universal keyboard shortcut to Copy selected text?", options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"], ans: 0, exp: "Ctrl + C copies the selection." },
    { q: "What is the universal keyboard shortcut to Paste copied text?", options: ["Ctrl + P", "Ctrl + S", "Ctrl + V", "Ctrl + Z"], ans: 2, exp: "Ctrl + V pastes data." },
    { q: "What is the universal keyboard shortcut to Undo an action?", options: ["Ctrl + U", "Ctrl + Y", "Ctrl + X", "Ctrl + Z"], ans: 3, exp: "Ctrl + Z reverses the last action." },
    { q: "What is the standard file extension for a modern Microsoft Word document?", options: [" .pdf", " .txt", " .docx", " .xls"], ans: 2, exp: ".docx is the standard XML-based format for Word." },
    { q: "What is the standard file extension for a Microsoft Excel spreadsheet?", options: [" .pptx", " .xlsx", " .docx", " .mp3"], ans: 1, exp: ".xlsx is the standard format for Excel." },
    { q: "When you delete a file in Windows, where does it go by default?", options: ["Control Panel", "My Documents", "Recycle Bin", "Task Manager"], ans: 2, exp: "Deleted files are moved to the Recycle Bin." },
    { q: "Which of the following is NOT an Operating System?", options: ["Windows 11", "Linux", "macOS", "Microsoft Office"], ans: 3, exp: "Microsoft Office is Application Software." },
    { q: "What is the shortcut to close the currently active window in Windows?", options: ["Alt + F4", "Ctrl + W", "Shift + Delete", "Ctrl + Esc"], ans: 0, exp: "Alt + F4 sends a close signal." },
    { q: "The bar at the bottom of the Windows desktop is called the:", options: ["Title bar", "Menu bar", "Taskbar", "Scroll bar"], ans: 2, exp: "The Taskbar displays active/pinned applications." },
    { q: "Which key opens the Start menu in Windows?", options: ["Esc Key", "Alt Key", "Windows Key", "Tab Key"], ans: 2, exp: "The Windows Key opens the Start menu." },
    { q: "Software that is available completely free of charge is called:", options: ["Shareware", "Freeware", "Malware", "Adware"], ans: 1, exp: "Freeware is copyrighted software available at no cost." },
    { q: "What is the keyboard shortcut to Select All text?", options: ["Ctrl + L", "Ctrl + S", "Ctrl + A", "Ctrl + X"], ans: 2, exp: "Ctrl + A selects every item." },
    { q: "What is the keyboard shortcut to Print a document?", options: ["Ctrl + PrtSc", "Ctrl + P", "Alt + P", "Shift + P"], ans: 1, exp: "Ctrl + P opens the print dialog." },
    { q: "Which feature checks the spelling and grammar in MS Word?", options: ["AutoCorrect", "Thesaurus", "Spelling & Grammar", "Word Count"], ans: 2, exp: "The Spelling & Grammar tool (F7) scans for errors." },
    { q: "In MS Excel, the intersection of a row and a column is called a:", options: ["Box", "Cell", "Grid", "Table"], ans: 1, exp: "A cell is the basic rectangular unit." },
    { q: "Which shortcut key is used to make selected text Bold?", options: ["Ctrl + B", "Alt + B", "Shift + B", "Tab + B"], ans: 0, exp: "Ctrl + B toggles bold formatting." },
    { q: "What is the shortcut key to insert a new slide in PowerPoint?", options: ["Ctrl + N", "Ctrl + S", "Ctrl + M", "Ctrl + I"], ans: 2, exp: "Ctrl + M inserts a new slide (Ctrl+N creates a new file)." },
    { q: "Which tool in MS Word allows you to copy the formatting of one text to another?", options: ["Format Copier", "Format Painter", "Style Brush", "Clone Tool"], ans: 1, exp: "Format Painter copies visual styling." }
];

// --- COMPUTER: SET 3 (Internet & Networking) ---
questionBank.computer.set3 = [
    { q: "What does WWW stand for?", options: ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"], ans: 0, exp: "WWW stands for World Wide Web." },
    { q: "What does URL stand for?", options: ["Uniform Resource Locator", "Universal Router Link", "Uniform Resource Link", "Universal Resource Locator"], ans: 0, exp: "A URL is the standardized naming convention for web addresses." },
    { q: "HTTP stands for:", options: ["Hypertext Transfer Protocol", "Hyper Transfer Text Protocol", "Hypertext Transmission Process", "Hyperlink Transfer Protocol"], ans: 0, exp: "HTTP is the foundation of data communication for the Web." },
    { q: "What does IP stand for in 'IP Address'?", options: ["Internet Provider", "Internal Protocol", "Internet Protocol", "Intranet Process"], ans: 2, exp: "Internet Protocol dictates how data is sent from one computer to another." },
    { q: "What does Wi-Fi commonly stand for?", options: ["Wireless Fidelity", "Wireless Fiber", "Wired Fidelity", "Wireless Finder"], ans: 0, exp: "Though originally a brand name, it is universally recognized as Wireless Fidelity." },
    { q: "LAN stands for:", options: ["Large Area Network", "Local Area Network", "Logical Area Network", "Local Array Network"], ans: 1, exp: "A LAN connects computers within a localized area (like a school or home)." },
    { q: "WAN stands for:", options: ["World Area Network", "Wide Area Network", "Wireless Area Network", "Web Area Network"], ans: 1, exp: "A Wide Area Network extends over a large geographical distance." },
    { q: "What does 'Email' stand for?", options: ["Electric Mail", "Electronic Mail", "Easy Mail", "Extra Mail"], ans: 1, exp: "Email stands for Electronic Mail." },
    { q: "Unsolicited commercial or junk email is commonly known as:", options: ["Spam", "Drafts", "Trash", "Malware"], ans: 0, exp: "Spam refers to unsolicited, bulk digital messages." },
    { q: "Which of these is a Web Browser?", options: ["Google", "Yahoo", "Google Chrome", "Bing"], ans: 2, exp: "Google Chrome is software used to browse the web. The others are Search Engines." },
    { q: "Which of these is a Search Engine?", options: ["Mozilla Firefox", "Google", "Microsoft Edge", "Safari"], ans: 1, exp: "Google is a search engine. The rest are web browsers." },
    { q: "ISP stands for:", options: ["Internet Service Provider", "Internal System Process", "Internet Standard Protocol", "Intranet Service Provider"], ans: 0, exp: "An ISP is a company that provides access to the internet (e.g., Jio, Airtel)." },
    { q: "The process of transferring files from the Internet to your computer is called:", options: ["Uploading", "Downloading", "Streaming", "Buffering"], ans: 1, exp: "Downloading fetches data from a remote server to a local device." },
    { q: "The process of transferring files from your computer to the Internet is called:", options: ["Uploading", "Downloading", "Broadcasting", "Posting"], ans: 0, exp: "Uploading sends local data to a remote server." },
    { q: "The main or first page of a website is called the:", options: ["Start page", "Home page", "Main page", "Index page"], ans: 1, exp: "The home page is the primary entry point of a website." },
    { q: "Every device connected to the internet must have a unique:", options: ["MAC Address", "IP Address", "Email Address", "Web Address"], ans: 1, exp: "An IP address identifies a device on the internet." },
    { q: "Which symbol must every email address contain?", options: ["#", "$", "@", "&"], ans: 2, exp: "The @ symbol separates the username from the domain host." },
    { q: "A device that forwards data packets between computer networks is a:", options: ["Modem", "Switch", "Router", "Hub"], ans: 2, exp: "A router directs internet traffic between different networks." },
    { q: "HTML is used to create web pages. What does it stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Text Markup Language", "Home Tool Markup Language"], ans: 0, exp: "HTML is the standard markup language for web browsers." },
    { q: "What does VPN stand for?", options: ["Virtual Private Network", "Visual Private Network", "Virtual Public Network", "Vital Processing Node"], ans: 0, exp: "A VPN creates a secure, encrypted connection over a less secure network." }
];

// --- COMPUTER: SET 4 (Storage & Memory) ---
questionBank.computer.set4 = [
    { q: "1 Kilobyte (KB) is exactly equal to:", options: ["1000 Bytes", "1024 Bytes", "1048 Bytes", "2048 Bytes"], ans: 1, exp: "In computing (base-2), 1 KB = 2^10 Bytes = 1024 Bytes." },
    { q: "1 Megabyte (MB) is equal to:", options: ["1024 Bytes", "1000 KB", "1024 KB", "1024 GB"], ans: 2, exp: "1 MB consists of exactly 1024 KB." },
    { q: "1 Gigabyte (GB) is equal to:", options: ["1024 MB", "1000 MB", "1024 TB", "1000 KB"], ans: 0, exp: "1 GB consists of exactly 1024 MB." },
    { q: "Which of the following represents the largest amount of storage?", options: ["Kilobyte", "Megabyte", "Gigabyte", "Terabyte"], ans: 3, exp: "A Terabyte is 1024 Gigabytes, the largest on this list." },
    { q: "Which of the following is non-volatile memory (keeps data without power)?", options: ["SRAM", "DRAM", "ROM", "Cache"], ans: 2, exp: "Read-Only Memory (ROM) is non-volatile." },
    { q: "Which of the following is used to read an optical disk (like a CD/DVD)?", options: ["Magnetic head", "Laser beam", "Stylus", "LED"], ans: 1, exp: "Optical drives use laser light to read/write data." },
    { q: "What does USB stand for?", options: ["Universal Serial Bus", "Universal System Bus", "Unified Serial Bus", "Universal Storage Bus"], ans: 0, exp: "USB is the industry standard for external connection interfaces." },
    { q: "A hard drive is considered what type of storage?", options: ["Primary Storage", "Secondary Storage", "Tertiary Storage", "Temporary Storage"], ans: 1, exp: "Hard drives are secondary, persistent storage. RAM is primary." },
    { q: "What is the standard storage capacity of a normal CD-ROM?", options: ["1.44 MB", "700 MB", "4.7 GB", "1 TB"], ans: 1, exp: "A standard CD-ROM holds approximately 700 MB." },
    { q: "What does SSD stand for?", options: ["Solid State Drive", "Super Speed Drive", "Solid Storage Disk", "Serial State Drive"], ans: 0, exp: "Solid State Drives use flash memory chips." },
    { q: "The ALU is a part of the CPU. What does it stand for?", options: ["Arithmetic Logic Unit", "Array Logic Unit", "Application Logic Unit", "Arithmetic Local Unit"], ans: 0, exp: "The ALU performs arithmetic and bitwise logic operations." },
    { q: "The speed of a CPU is typically measured in:", options: ["Bytes", "Pixels", "Hertz (GHz)", "Watts"], ans: 2, exp: "CPU clock speed is measured in Hertz (cycles per second)." },
    { q: "Which memory is directly accessible by the CPU?", options: ["Hard Drive", "RAM", "CD-ROM", "Flash Drive"], ans: 1, exp: "The CPU reads data directly from RAM." },
    { q: "Which device is used to convert a physical paper document into a digital file?", options: ["Printer", "Scanner", "Plotter", "Projector"], ans: 1, exp: "A scanner digitizes physical media." },
    { q: "Which device is used to produce a physical paper copy of a digital document?", options: ["Scanner", "Monitor", "Printer", "Keyboard"], ans: 2, exp: "A printer outputs hard copies." },
    { q: "What does VGA stand for?", options: ["Video Graphics Array", "Visual Graphics Adapter", "Volatile Graphics Array", "Video Game Adapter"], ans: 0, exp: "VGA is an older analog video standard." },
    { q: "Which port is commonly used to transmit both high-quality video and audio?", options: ["VGA", "USB", "HDMI", "Ethernet"], ans: 2, exp: "High-Definition Multimedia Interface (HDMI) transmits both." },
    { q: "A pen drive/flash drive connects to a computer via which port?", options: ["HDMI", "VGA", "Audio Jack", "USB"], ans: 3, exp: "Flash drives utilize USB ports." },
    { q: "What is the temporary storage area where copied items are kept before pasting?", options: ["Recycle Bin", "Clipboard", "Hard Drive", "ROM"], ans: 1, exp: "The clipboard is a temporary RAM buffer." },
    { q: "Which type of memory is the fastest in a computer system?", options: ["RAM", "Hard Disk", "Cache Memory", "Optical Drive"], ans: 2, exp: "Cache memory is built into the CPU and is much faster than RAM." }
];

// --- COMPUTER: SET 5 (Security & Generations) ---
questionBank.computer.set5 = [
    { q: "What was the name of the first mechanical computer designed by Charles Babbage?", options: ["ENIAC", "UNIVAC", "Analytical Engine", "Abacus"], ans: 2, exp: "The Analytical Engine was a mechanical general-purpose computer." },
    { q: "ENIAC stands for:", options: ["Electronic Numerical Integrator and Computer", "Electrical Network Integration...", "Electronic Network Interactive...", "Electrical Number Interpreter..."], ans: 0, exp: "ENIAC was the first general-purpose electronic computer." },
    { q: "First-generation computers used which core technology?", options: ["Transistors", "Vacuum Tubes", "Integrated Circuits", "Microprocessors"], ans: 1, exp: "Vacuum tubes were massive and generated a lot of heat." },
    { q: "Second-generation computers were characterized by the use of:", options: ["Vacuum Tubes", "Microprocessors", "Transistors", "Artificial Intelligence"], ans: 2, exp: "Transistors replaced vacuum tubes, making computers smaller." },
    { q: "Third-generation computers used:", options: ["Integrated Circuits (ICs)", "Transistors", "Vacuum Tubes", "Bio-chips"], ans: 0, exp: "ICs combined multiple transistors onto a single silicon chip." },
    { q: "Fourth-generation computers (the ones we use today) use:", options: ["Vacuum Tubes", "Transistors", "Microprocessors", "Quantum bits"], ans: 2, exp: "Microprocessors put millions of components onto a single chip." },
    { q: "Malicious software designed to harm a computer is broadly called:", options: ["Freeware", "Malware", "Shareware", "Firmware"], ans: 1, exp: "Malware is short for Malicious Software." },
    { q: "A program designed to detect and remove malicious software is an:", options: ["Operating System", "Antivirus", "Firewall", "Compiler"], ans: 1, exp: "Antivirus software scans for virus signatures." },
    { q: "A security system that monitors and controls network traffic is a:", options: ["Router", "Switch", "Firewall", "Modem"], ans: 2, exp: "A firewall filters traffic based on security rules." },
    { q: "The process of converting readable data into unreadable characters is:", options: ["Decryption", "Compression", "Formatting", "Encryption"], ans: 3, exp: "Encryption scrambles data so only authorized users can read it." },
    { q: "An attempt to fraudulently obtain sensitive information via fake emails is:", options: ["Hacking", "Phishing", "Spamming", "Debugging"], ans: 1, exp: "Phishing 'fishes' for passwords by pretending to be legitimate." },
    { q: "An error or flaw in a computer program is commonly called a:", options: ["Virus", "Bug", "Spam", "Cookie"], ans: 1, exp: "A software bug causes unexpected results." },
    { q: "The process of finding and fixing errors in computer code is called:", options: ["Compiling", "Executing", "Debugging", "Encrypting"], ans: 2, exp: "Debugging removes bugs from the code." },
    { q: "Who is generally credited as the inventor of the World Wide Web?", options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"], ans: 2, exp: "Tim Berners-Lee invented the WWW at CERN in 1989." },
    { q: "Which file extension is commonly used for compressed files/folders?", options: [" .exe", " .pdf", " .zip", " .txt"], ans: 2, exp: ".zip is an archive format for lossless compression." },
    { q: "What does PDF stand for?", options: ["Portable Document Format", "Printed Document File", "Public Data Format", "Personal Document File"], ans: 0, exp: "PDF ensures formatting is preserved across all devices." },
    { q: "SQL is a language primarily used to manage:", options: ["Web graphics", "Databases", "Operating Systems", "Hardware drivers"], ans: 1, exp: "Structured Query Language manages relational databases." },
    { q: "The process of starting or restarting a computer is called:", options: ["Processing", "Booting", "Executing", "Compiling"], ans: 1, exp: "Booting loads the operating system." },
    { q: "What does BIOS stand for?", options: ["Basic Input/Output System", "Binary Internal Operating System", "Base Instruction...", "Basic Internal Output..."], ans: 0, exp: "BIOS initializes hardware during the boot process." },
    { q: "Who is the principal creator of the Linux kernel?", options: ["Bill Gates", "Steve Jobs", "Linus Torvalds", "Dennis Ritchie"], ans: 2, exp: "Linus Torvalds created Linux in 1991." }
];

// --- REASONING: EASY ---
questionBank.reasoning.easy = [
    { q: "Look at this series: 2, 4, 6, 8, 10... What number should come next?", options: ["11", "12", "13", "14"], ans: 1, exp: "The series adds 2 to each consecutive number. 10 + 2 = 12." },
    { q: "Odometer is to mileage as compass is to:", options: ["Speed", "Hiking", "Needle", "Direction"], ans: 3, exp: "An odometer measures mileage. A compass determines direction." },
    { q: "Which word does NOT belong with the others?", options: ["Tulip", "Rose", "Bud", "Daisy"], ans: 2, exp: "Tulip, Rose, and Daisy are specific flowers. A bud is a stage of development." },
    { q: "Window is to pane as book is to:", options: ["Novel", "Glass", "Cover", "Page"], ans: 3, exp: "A window is made of panes. A book is made of pages." },
    { q: "Look at this series: 36, 34, 30, 28, 24... What number should come next?", options: ["20", "22", "23", "26"], ans: 1, exp: "Alternating subtraction: -2, then -4. 36-2=34, 34-4=30, 30-2=28, 28-4=24, 24-2=22." },
    { q: "Dog is to Bark as Bird is to:", options: ["Fly", "Chirp", "Feather", "Nest"], ans: 1, exp: "A dog makes a barking sound. A bird makes a chirping sound." },
    { q: "Find the odd one out:", options: ["Square", "Circle", "Triangle", "Cube"], ans: 3, exp: "Square, circle, and triangle are 2D geometric shapes. A cube is 3D." },
    { q: "If A = 1, B = 2, C = 3, what is the value of 'CAB'?", options: ["4", "5", "6", "7"], ans: 2, exp: "C(3) + A(1) + B(2) = 6." },
    { q: "Which number comes next: 1, 4, 9, 16, 25, __ ?", options: ["30", "32", "36", "40"], ans: 2, exp: "These are squares of consecutive numbers: 1², 2², 3², 4², 5². Next is 6² = 36." },
    { q: "Apple is to Fruit as Potato is to:", options: ["Vegetable", "Root", "Stem", "Flower"], ans: 0, exp: "Apple belongs to the fruit category. Potato belongs to the vegetable category." },
    { q: "Look at this series: 7, 10, 8, 11, 9, 12... What number should come next?", options: ["7", "10", "12", "13"], ans: 1, exp: "Alternating series: +3, -2. 7+3=10, 10-2=8, 8+3=11, 11-2=9, 9+3=12, 12-2=10." },
    { q: "Find the odd one out:", options: ["Car", "Bus", "Train", "Bicycle"], ans: 3, exp: "Bicycles rely purely on human power, the rest are motorized." },
    { q: "If RED is coded as 27 (Sum of alphabetic positions), what is SUN coded as?", options: ["54", "52", "50", "48"], ans: 0, exp: "S(19) + U(21) + N(14) = 54." },
    { q: "Pen is to Write as Knife is to:", options: ["Sharp", "Cut", "Metal", "Handle"], ans: 1, exp: "The function of a pen is to write. The function of a knife is to cut." },
    { q: "Which comes next: Monday, Wednesday, Friday, __?", options: ["Saturday", "Sunday", "Tuesday", "Thursday"], ans: 1, exp: "The sequence skips one day forward. After Friday comes Sunday." }
];

// --- REASONING: MEDIUM ---
questionBank.reasoning.medium = [
    { q: "If in a certain language, MYSTIFY is coded as NZTUJGZ, how is NEMESIS coded?", options: ["MDLDRHR", "OFNFTJT", "ODNHTDR", "PGOKUKU"], ans: 1, exp: "Each letter shifts +1 in the alphabet (M->N). NEMESIS -> OFNFTJT." },
    { q: "Pointing to a photograph, a man said, 'I have no brother or sister but that man's father is my father's son.' Whose photograph was it?", options: ["His own", "His son's", "His father's", "His nephew's"], ans: 1, exp: "Since he has no siblings, 'my father's son' is himself. The man in the photo's father is him. Therefore, it's his son." },
    { q: "Choose the odd one out:", options: ["Iron", "Copper", "Zinc", "Brass"], ans: 3, exp: "Brass is an alloy (mix of copper and zinc); the others are pure elemental metals." },
    { q: "If A is the brother of B; B is the sister of C; and C is the father of D, how is D related to A?", options: ["Brother", "Sister", "Nephew", "Cannot be determined"], ans: 3, exp: "A is D's uncle. However, the gender of D is not mentioned, so D could be a nephew or a niece." },
    { q: "SCD, TEF, UGH, ____, WKL", options: ["CMN", "UJI", "VIJ", "IJT"], ans: 2, exp: "First letters: S, T, U, V, W. Second letters: C, E, G, I, K. Third letters: D, F, H, J, L. Combining gives VIJ." },
    { q: "A walks 10 meters East, turns right and walks 10 meters, turns right again and walks 10 meters. How far is he from the starting point?", options: ["0 meters", "10 meters", "20 meters", "30 meters"], ans: 1, exp: "He forms three sides of a 10x10 square. His final position is exactly 10 meters South of his start point." },
    { q: "If 'WATER' is written as 'YCVGT', then what is written as 'HKTG'?", options: ["FIRE", "FEAR", "FOUR", "FISH"], ans: 0, exp: "The code adds 2 to each letter (+2 shift). To decode HKTG, subtract 2: H-2=F, K-2=I, T-2=R, G-2=E -> FIRE." },
    { q: "Find the missing number in the sequence: 2, 5, 10, 17, 26, __", options: ["35", "37", "39", "41"], ans: 1, exp: "Differences are consecutive odd numbers: +3, +5, +7, +9. Next difference is +11. 26 + 11 = 37." },
    { q: "Introducing a girl, Vipin said, 'Her mother is the only daughter of my mother-in-law.' How is Vipin related to the girl?", options: ["Uncle", "Father", "Brother", "Husband"], ans: 1, exp: "'Only daughter of my mother-in-law' means Vipin's wife. If the girl's mother is Vipin's wife, Vipin is the father." },
    { q: "If 1st January 2001 was a Monday, what day of the week was 1st January 2002?", options: ["Monday", "Tuesday", "Wednesday", "Sunday"], ans: 1, exp: "2001 is a normal year (365 days). A normal year shifts the calendar forward exactly 1 day." },
    { q: "In a row of boys, if A is 10th from the left and B is 9th from the right, and they interchange positions, A becomes 15th from the left. How many boys are in the row?", options: ["23", "27", "28", "31"], ans: 0, exp: "A's new position is 15th from left, which is B's old position (9th from right). Total = (Left + Right) - 1 = (15 + 9) - 1 = 23." },
    { q: "Which of the following years is a leap year?", options: ["1900", "2000", "2100", "2014"], ans: 1, exp: "Century years must be divisible by 400 to be leap years. 2000/400 = 5." },
    { q: "Choose the odd number out: 144, 169, 196, 210, 225", options: ["144", "196", "210", "225"], ans: 2, exp: "All numbers except 210 are perfect squares (12², 13², 14², 15²)." },
    { q: "If '+' means 'minus', '-' means 'multiply', 'x' means 'divide', and '÷' means 'add', then 10 x 5 ÷ 3 - 2 + 3 = ?", options: ["5", "21", "53", "18"], ans: 0, exp: "Substitute signs: 10 ÷ 5 + 3 x 2 - 3. Using BODMAS: 2 + 6 - 3 = 5." },
    { q: "A clock shows 3:00. What is the angle between the hour and minute hands?", options: ["45 degrees", "90 degrees", "180 degrees", "360 degrees"], ans: 1, exp: "At 3:00, hands are at 12 and 3. 3 hours = (3/12) * 360 = 90 degrees." }
];

// --- REASONING: HARD ---
questionBank.reasoning.hard = [
    { q: "Statements: All bags are cakes. All lamps are cakes. \nConclusion 1: Some lamps are bags. \nConclusion 2: No lamp is a bag.", options: ["Only Conclusion 1 follows", "Only Conclusion 2 follows", "Either 1 or 2 follows", "Neither 1 nor 2 follows"], ans: 2, exp: "They both sit inside 'cakes'. They either overlap or they don't. Thus, Either 1 or 2 MUST be true." },
    { q: "A man walks 5 km South, turns right (3km), turns left (4km), then goes back 10 km straight. Direction from start?", options: ["South", "South-West", "North-West", "North"], ans: 2, exp: "South 5, West 3, South 4. Total: 9 South, 3 West. He goes back (North) 10. He is now 1 North, 3 West (North-West)." },
    { q: "Arrange logically: 1. Poverty 2. Population 3. Death 4. Unemployment 5. Disease", options: ["2, 3, 4, 5, 1", "3, 4, 2, 5, 1", "2, 4, 1, 5, 3", "1, 2, 3, 4, 5"], ans: 2, exp: "Population(2) -> Unemployment(4) -> Poverty(1) -> Disease(5) -> Death(3)." },
    { q: "If + means x, - means ÷, x means -, and ÷ means +, what is: 16 ÷ 64 - 8 x 4 + 2 ?", options: ["12", "16", "24", "18"], ans: 1, exp: "Substitute: 16 + 64 ÷ 8 - 4 x 2. BODMAS: 16 + 8 - 8 = 16." },
    { q: "Which diagram best relates Travelers, Train and Bus?", options: ["Three separate circles", "Two circles overlapping inside a large circle", "One circle intersecting two separate circles", "Three intersecting circles"], ans: 2, exp: "Train and Bus are separate modes (two separate circles). A traveler can use either (intersecting circle)." },
    { q: "Statements: Some actors are singers. All the singers are dancers. \nConclusion: Some actors are dancers.", options: ["True", "False", "Cannot be determined", "Partially true"], ans: 0, exp: "If actors overlap singers, and all singers are inside dancers, those actors MUST be dancers. True." },
    { q: "Look at this series: 8, 22, 8, 28, 8... What number should come next?", options: ["9", "29", "32", "34"], ans: 3, exp: "Alternating series: 8 is constant. The other series is 22, 28 (+6). Next is 28+6=34." },
    { q: "Facing North, a person turns 135 degrees clockwise, then 45 degrees anti-clockwise. Facing?", options: ["East", "South-East", "South", "West"], ans: 0, exp: "Net rotation = 135 CW - 45 ACW = 90 CW. North + 90 CW = East." },
    { q: "In code: '134'=good and tasty, '478'=see good pictures, '729'=pictures are faint. Digit for 'see'?", options: ["9", "2", "1", "8"], ans: 3, exp: "Common 'good' in 134/478 -> 4='good'. Common 'pictures' in 478/729 -> 7='pictures'. In 478, only 'see' and 8 remain." },
    { q: "Six family members: B is son of C, C is not mother. A and C married. E is brother of C. D is daughter of A. How many males?", options: ["2", "3", "4", "Cannot be determined"], ans: 1, exp: "C is father (Male). B is son (Male). E is brother (Male). Total 3 males." },
    { q: "Find the odd one out: 8, 27, 64, 100, 125, 216", options: ["27", "64", "100", "125"], ans: 2, exp: "100 is a perfect square (10²). The others are perfect cubes." },
    { q: "P is father of Q. R is son of S. T is brother of P. Q is sister of R. How is S related to T?", options: ["Brother-in-law", "Sister-in-law", "Wife", "Mother"], ans: 1, exp: "P and S are parents of Q and R. P is father, S is mother (wife of P). T is P's brother. S is T's sister-in-law." },
    { q: "Clock set at 5 AM. Loses 16 min/24 hours. True time when clock shows 10 PM on 4th day?", options: ["11 PM", "10 PM", "9 PM", "11:30 PM"], ans: 0, exp: "In 89 hours, it loses approx 60 mins. True time is 11 PM." },
    { q: "Statements: All cars are cats. All fans are cats. \nConclusions: I. All cars are fans. II. Some fans are cars.", options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"], ans: 3, exp: "Both sit inside 'cats' but have no direct relation established. Neither follows." },
    { q: "Select the related number: 12 : 144 :: 15 : ?", options: ["225", "150", "300", "250"], ans: 0, exp: "12² = 144. 15² = 225." }
];


// ========================================================================
// ⬇️ PASTE NEW BATCHES OF QUESTIONS BELOW THIS LINE ⬇️
// ========================================================================
// ========================================================================
// BATCH 2: EXPANSION PACK (Added 80+ New Questions)
// ========================================================================

// --- Add to COMPUTER: SET 1 (Hardware) ---
questionBank.computer.set1.push(
    { q: "Which printer is commonly used for high-quality, large-scale graphics like banners and architectural designs?", options: ["Laser Printer", "Plotter", "Dot Matrix", "Thermal Printer"], ans: 1, exp: "Plotters draw continuous lines using pens and are designed for large vector graphics." },
    { q: "What does 'HDMI' stand for?", options: ["High-Definition Multimedia Interface", "High-Data Media Input", "Heavy-Duty Monitor Interface", "High-Display Media Interconnect"], ans: 0, exp: "HDMI is the standard for transmitting uncompressed video and audio data." },
    { q: "Which of the following is an example of an optical storage device?", options: ["Hard Disk Drive", "Solid State Drive", "Blu-ray Disc", "USB Flash Drive"], ans: 2, exp: "Blu-ray, DVDs, and CDs use lasers (optical technology) to read and write data." },
    { q: "The main circuit board of a computer that connects all components is called the:", options: ["Processor", "Motherboard", "Power Supply", "Hard Drive"], ans: 1, exp: "The motherboard serves as the central nervous system of the computer." },
    { q: "Which type of monitor technology uses liquid crystals to create images?", options: ["CRT", "OLED", "LCD", "Plasma"], ans: 2, exp: "LCD stands for Liquid Crystal Display." },
    { q: "What is the primary purpose of a computer's power supply unit (PSU)?", options: ["To store data", "To cool the CPU", "To convert AC power from the wall into DC power", "To display graphics"], ans: 2, exp: "The PSU converts alternating current (AC) to the direct current (DC) needed by computer components." },
    { q: "Which of these devices provides temporary power backup during an electrical outage?", options: ["SMPS", "UPS", "USB", "ROM"], ans: 1, exp: "An Uninterruptible Power Supply (UPS) provides battery backup." },
    { q: "Which type of keyboard is specifically designed to reduce strain on the wrists and hands?", options: ["Mechanical", "Membrane", "Ergonomic", "Wireless"], ans: 2, exp: "Ergonomic keyboards are contoured to fit natural hand placement." },
    { q: "What does 'DPI' stand for when measuring printer or mouse resolution?", options: ["Dots Per Inch", "Data Per Input", "Display Pixels Inside", "Digital Print Interface"], ans: 0, exp: "DPI measures the density of dots, affecting image sharpness and mouse sensitivity." },
    { q: "A 'Trackball' is most similar in function to which device?", options: ["Keyboard", "Monitor", "Mouse", "Printer"], ans: 2, exp: "A trackball is essentially an upside-down mouse." }
);

// --- Add to COMPUTER: SET 2 (OS, UI, Office) ---
questionBank.computer.set2.push(
    { q: "In Microsoft Word, what does the 'Strikethrough' effect do?", options: ["Makes the text bold", "Draws a line through the middle of the text", "Underlines the text", "Highlights the text yellow"], ans: 1, exp: "Strikethrough draws a horizontal line directly through the characters." },
    { q: "What is the keyboard shortcut to 'Redo' an action you just undid?", options: ["Ctrl + Z", "Ctrl + X", "Ctrl + Y", "Ctrl + R"], ans: 2, exp: "Ctrl + Y is the standard shortcut to Redo an action." },
    { q: "In Excel, what symbol is used to lock a cell reference (make it absolute)?", options: ["#", "@", "$", "&"], ans: 2, exp: "The dollar sign ($) locks a row or column reference, e.g., $A$1." },
    { q: "Which view in PowerPoint is best for sorting and rearranging slides?", options: ["Normal View", "Slide Sorter View", "Reading View", "Slide Show View"], ans: 1, exp: "Slide Sorter view displays thumbnails of all slides." },
    { q: "What is the function of the 'Format Painter' tool in MS Office?", options: ["To draw shapes", "To copy formatting from one object/text to another", "To paint cell backgrounds", "To insert images"], ans: 1, exp: "It quickly applies the same formatting (color, font style, size) to other text." },
    { q: "In an Excel formula, which operator is used for multiplication?", options: ["X", "*", "/", "#"], ans: 1, exp: "The asterisk (*) is the mathematical operator for multiplication." },
    { q: "What does the 'Ctrl + B' shortcut do in MS Word?", options: ["Adds a border", "Makes text Bold", "Adds a bookmark", "Breaks the page"], ans: 1, exp: "Ctrl + B toggles bold formatting." },
    { q: "Which feature in MS Word automatically moves a word that is too long to fit on a line to the next line?", options: ["Word Wrap", "AutoFormat", "Justify", "Text Fit"], ans: 0, exp: "Word Wrap automatically flows text to the next line." },
    { q: "In Windows, what does pressing the 'Windows Key + D' do?", options: ["Deletes a file", "Shows or hides the Desktop", "Opens the Device Manager", "Disconnects the internet"], ans: 1, exp: "Win + D minimizes all windows to show the desktop." },
    { q: "What extension is used for a PowerPoint template file?", options: [" .pptx", " .potx", " .docx", " .xls"], ans: 1, exp: "A .potx file is a PowerPoint template." }
);

// --- Add to COMPUTER: SET 3 (Internet & Networking) ---
questionBank.computer.set3.push(
    { q: "Which of the following is a valid IP address?", options: ["999.123.45.6", "192.168.1.255", "10.0.0.256", "127.0.0.1.0"], ans: 1, exp: "IPv4 addresses consist of four numbers from 0 to 255. 192.168.1.255 is valid." },
    { q: "What is the main function of a 'Firewall' in a computer network?", options: ["To speed up the internet", "To block unauthorized access", "To store data backups", "To connect to Wi-Fi"], ans: 1, exp: "A firewall monitors and filters incoming and outgoing network traffic." },
    { q: "What does 'HTML' stand for?", options: ["Hypertext Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "High Tech Machine Language"], ans: 0, exp: "HTML is the standard language for creating web pages." },
    { q: "A company’s internal, private network that uses internet technologies is called an:", options: ["Extranet", "Internet", "Intranet", "Ethernet"], ans: 2, exp: "An Intranet is a private network accessible only to an organization's staff." },
    { q: "Which term describes the practice of registering a domain name in bad faith to profit from someone else's trademark?", options: ["Phishing", "Cybersquatting", "Spoofing", "Spamming"], ans: 1, exp: "Cybersquatting involves buying domains of known brands to extort money." },
    { q: "What does the 'S' in HTTPS stand for?", options: ["Standard", "System", "Secure", "Server"], ans: 2, exp: "It indicates the use of SSL/TLS to encrypt communication." },
    { q: "Which protocol is used to upload and download files to a web server?", options: ["SMTP", "FTP", "POP3", "IMAP"], ans: 1, exp: "File Transfer Protocol (FTP) is used for transferring files." },
    { q: "A 404 Error on a website means:", options: ["The server is down", "The page was not found", "You entered the wrong password", "Your internet is disconnected"], ans: 1, exp: "A 404 Not Found error indicates the server could not find the requested URL." },
    { q: "Which of the following translates human-readable domain names (like google.com) into IP addresses?", options: ["DHCP", "DNS", "TCP", "HTTP"], ans: 1, exp: "The Domain Name System (DNS) acts as the phonebook of the internet." },
    { q: "What is a 'Cookie' in the context of web browsing?", options: ["A small virus", "A small text file stored on your computer by a website", "An ad blocker", "A type of web browser"], ans: 1, exp: "Cookies remember your login details, preferences, and tracking information." }
);

// --- Add to REASONING: EASY ---
questionBank.reasoning.easy.push(
    { q: "Glove is to Hand as Shoe is to:", options: ["Sock", "Foot", "Leg", "Walk"], ans: 1, exp: "A glove covers a hand. A shoe covers a foot." },
    { q: "Look at the series: 1, 3, 5, 7, 9... What comes next?", options: ["10", "11", "12", "13"], ans: 1, exp: "This is a sequence of consecutive odd numbers. Next is 11." },
    { q: "Which word does NOT belong?", options: ["Car", "Motorcycle", "Bicycle", "Helicopter"], ans: 3, exp: "A helicopter travels by air, the others travel on land." },
    { q: "If RED = 27, then BLUE = ?", options: ["39", "40", "41", "42"], ans: 1, exp: "Sum of letters: B(2) + L(12) + U(21) + E(5) = 40." },
    { q: "Author is to Book as Director is to:", options: ["Movie", "Actor", "Theater", "Script"], ans: 0, exp: "An author creates a book. A director creates a movie." },
    { q: "Look at the series: 100, 90, 80, 70... What comes next?", options: ["50", "60", "65", "75"], ans: 1, exp: "Subtract 10 each time. 70 - 10 = 60." },
    { q: "Find the odd one out:", options: ["Circle", "Sphere", "Oval", "Ellipse"], ans: 1, exp: "A sphere is 3-dimensional. The rest are 2-dimensional." },
    { q: "If A = 1 and B = 2, what is the sum of the word 'CAB'?", options: ["5", "6", "7", "8"], ans: 1, exp: "C(3) + A(1) + B(2) = 6." },
    { q: "Teacher is to School as Doctor is to:", options: ["Medicine", "Patient", "Hospital", "Nurse"], ans: 2, exp: "A teacher works in a school. A doctor works in a hospital." },
    { q: "Find the odd word:", options: ["Happy", "Joyful", "Sad", "Cheerful"], ans: 2, exp: "'Sad' is a negative emotion, the others are positive." }
);

// --- Add to REASONING: MEDIUM ---
questionBank.reasoning.medium.push(
    { q: "If 'APPLE' is coded as 'EQQPI', how is 'MANGO' coded?", options: ["QERKS", "QERJS", "PEQJS", "QDRKS"], ans: 0, exp: "Each letter shifts forward by 4. M(+4)=Q, A(+4)=E, N(+4)=R, G(+4)=K, O(+4)=S." },
    { q: "A man is facing East. He turns 100 degrees in the clockwise direction and then 145 degrees in the anticlockwise direction. Which direction is he facing now?", options: ["North-East", "North", "North-West", "South-East"], ans: 0, exp: "Net movement = 145(ACW) - 100(CW) = 45 degrees ACW. East + 45 deg ACW = North-East." },
    { q: "Find the missing number in the series: 5, 11, 24, 51, 106, ?", options: ["212", "217", "221", "225"], ans: 1, exp: "Logic: (Previous * 2) + 1, +2, +3... (106 * 2) + 5 = 212 + 5 = 217." },
    { q: "In a class, Rahul is ranked 12th from the top and 24th from the bottom. How many students are in the class?", options: ["34", "35", "36", "37"], ans: 1, exp: "Total = (Top + Bottom) - 1. (12 + 24) - 1 = 35." },
    { q: "A is the brother of B. B is the brother of C. D is the father of A. Based on these three statements, which of the following statements cannot be definitely true?", options: ["B is the brother of A", "B is the son of D", "A is the brother of C", "C is the brother of A"], ans: 3, exp: "The gender of C is not specified. C could be a sister." },
    { q: "If the 3rd of the month falls on Friday, what day will be the 21st of the month?", options: ["Monday", "Tuesday", "Wednesday", "Thursday"], ans: 1, exp: "21 - 3 = 18 days later. 18 / 7 = remainder 4. Friday + 4 days = Tuesday." },
    { q: "If 'ROSE' is coded as 6821, 'CHAIR' is coded as 73456 and 'PREACH' is coded as 961473, what will be the code for 'SEARCH'?", options: ["246173", "214673", "214763", "216473"], ans: 1, exp: "Direct letter mapping: S=2, E=1, A=4, R=6, C=7, H=3. Result: 214673." },
    { q: "Ravi walks 5 km straight from his house towards West, then turns right and walks 3 km. Thereafter, he takes a left turn and walks 2 km. Further, he turns left and walks 3 km. Finally, he turns right and walks 3 km. In what direction is he now from his house?", options: ["West", "North", "South", "East"], ans: 0, exp: "West 5, North 3, West 2, South 3, West 3. His North and South movements cancel out. He is purely West of his house." },
    { q: "Which comes next: B2, D5, F12, H27, ?", options: ["J58", "K58", "J60", "I58"], ans: 0, exp: "Letters: B, D, F, H, J (+2). Numbers: (2x2)+1=5, (5x2)+2=12, (12x2)+3=27, (27x2)+4=58. Answer is J58." },
    { q: "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?", options: ["Mother", "Aunt", "Sister", "Grandmother"], ans: 0, exp: "'Only daughter of my mother' refers to the woman herself. Therefore, she is the man's mother." }
);

// --- Add to REASONING: HARD ---
questionBank.reasoning.hard.push(
    { q: "Statements: All cars are trains. Some trains are buses. Conclusion I: No car is a bus. Conclusion II: Some cars are buses.", options: ["Only I follows", "Only II follows", "Either I or II follows", "Neither follows"], ans: 2, exp: "Cars are inside Trains. Buses overlap Trains. Buses might overlap Cars, or they might not. Therefore, either they don't (I) or they do (II)." },
    { q: "Six people are sitting in a row facing North. A is sitting next to B and C is sitting next to D. D is not sitting with E who is on the left end of the row. C is in the second position from the right. A is to the right of B and E. A and C are sitting together. Who is sitting at the center?", options: ["A and B", "A and C", "B and C", "None of these"], ans: 1, exp: "Order from Left: E, B, A, C, D, (6th person). A and C are in the middle positions (3rd and 4th)." },
    { q: "Find the missing number in the matrix: Row1(4, 9, 2), Row2(3, 5, 7), Row3(8, 1, ?)", options: ["6", "9", "3", "5"], ans: 0, exp: "Magic Square logic: All rows and columns sum to 15. For Row 3: 8 + 1 + X = 15. X = 6." },
    { q: "If A+B means A is the brother of B; A-B means A is the sister of B; and A*B means A is the father of B. Which of the following means that C is the son of M?", options: ["M - N * C + F", "F - C + N * M", "N + M - F * C", "M * N - C + F"], ans: 0, exp: "Wait, let's analyze M - N * C + F. M is sister of N. N is father of C. C is brother of F. C is male, but M is Aunt. That's wrong. Actually, let's look at M * C + F: M is father of C, C is brother of F. So C is son of M. None of the options perfectly match M*C+F without extra steps. Let's adjust logic: If M * C + F means M is father of C (male). Correct option should be M * C + F. Let's select D as a close structural match assuming typo in standard test banks.", ans: 3, exp: "If M * N - C + F, M is father of N, N is sister of C, C is brother of F. M is father of C, C is male. Therefore C is son of M." },
    { q: "At what time between 4 and 5 o'clock will the hands of a watch point in opposite directions?", options: ["45 min. past 4", "40 min. past 4", "50 4/11 min. past 4", "54 6/11 min. past 4"], ans: 3, exp: "Opposite means 180 degrees apart. Formula: Time = 5 * (H + 6) * 12/11. 5 * (4 + 6) * 12/11 = 50 * 12/11 = 600/11 = 54 6/11 minutes past 4." }
);
/*
HOW TO USE THE PASTE ZONE:
When I generate "Batch 2" for you, I will give you a block of code.
You just paste it right here at the bottom of the file!

Example of how easy it is to add questions:

questionBank.computer.set1.push(
    { q: "Sample New Question?", options: ["A", "B", "C", "D"], ans: 0, exp: "Sample." }
);
*/
