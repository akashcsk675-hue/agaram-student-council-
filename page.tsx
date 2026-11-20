"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const authorizedUsers: { [key: string]: { pass: string; name: string; role: string; dept: string } } = {
    "admin": { pass: "starkadmin123", name: "Administrator", role: "Admin", dept: "all" },

    // 1. Finance
    "mullaikodi_minister": { pass: "FinMullai@2026", name: "Mullaikodi C", role: "Minister", dept: "finance" },
    "hashini_member": { pass: "Hashini#1", name: "Hashini B", role: "Member", dept: "finance" },
    "dharshini_member": { pass: "Dharshini#2", name: "Dharshini", role: "Member", dept: "finance" },
    "samuel_mentor": { pass: "Samuel$2026", name: "Samuel", role: "Mentor", dept: "finance" },
    "prasanna_mentor": { pass: "Prasanna$2026", name: "Prasanna", role: "Mentor", dept: "finance" },
    "meenakshi_advisor": { pass: "Meenakshi#3", name: "Meenakshi R", role: "Advisor", dept: "finance" },

    // 2. Arts & Cultural
    "deepa_minister": { pass: "CultureDeepa@2026", name: "Deepa T", role: "Minister", dept: "cultural-arts" },
    "surudisha_member": { pass: "Surudisha#1", name: "Surudisha K", role: "Member", dept: "cultural-arts" },
    "divyashree_member": { pass: "Divyashree#2", name: "Divyashree K", role: "Member", dept: "cultural-arts" },
    "karthik_mentor": { pass: "Karthik$2026", name: "Karthik", role: "Mentor", dept: "cultural-arts" },
    "naveen_mentor": { pass: "Naveen$2026", name: "Naveen", role: "Mentor", dept: "cultural-arts" },
    "renuga_advisor": { pass: "Renuga#3", name: "Renuga S", role: "Advisor", dept: "cultural-arts" },

    // 3. Education
    "saravanavel_minister": { pass: "EduSaravana@2026", name: "Saravanavel D", role: "Minister", dept: "education" },
    "jeyakeerthana_member": { pass: "JeyaKeerthana#1", name: "Jeya Keerthana G", role: "Member", dept: "education" },
    "nivetha_member": { pass: "Nivetha#2", name: "Nivetha S", role: "Member", dept: "education" },
    "maheshwari_mentor": { pass: "Maheshwari$2026", name: "Maheshwari", role: "Mentor", dept: "education" },
    "manodeepan_mentor": { pass: "ManoDeepan$2026", name: "Mano Deepan", role: "Mentor", dept: "education" },
    "mayandi_advisor": { pass: "Mayandi#3", name: "Mayandi U", role: "Advisor", dept: "education" },

    // 4. Health Welfare
    "veeramani_minister": { pass: "HealthVeera@2026", name: "Veeramani S", role: "Minister", dept: "health-welfare" },
    "atchaya_member": { pass: "Atchaya#1", name: "Atchaya S", role: "Member", dept: "health-welfare" },
    "harithasri_member": { pass: "HarithaSri#2", name: "Haritha Sri P", role: "Member", dept: "health-welfare" },
    "kamalakannan_mentor": { pass: "Kamalakannan$2026", name: "Dr. Kamalakannan", role: "Mentor", dept: "health-welfare" },
    "mahalakshmi_mentor": { pass: "Mahalakshmi$2026", name: "Mahalakshmi", role: "Mentor", dept: "health-welfare" },
    "harini_advisor": { pass: "Harini#3", name: "Harini P", role: "Advisor", dept: "health-welfare" },

    // 5. Women's Welfare
    "vijay_minister": { pass: "WomensVijay@2026", name: "Vijay M", role: "Minister", dept: "womens-welfare" },
    "nithya_member": { pass: "Nithya#1", name: "Nithya S", role: "Member", dept: "womens-welfare" },
    "sathiyaraj_member": { pass: "Sathiyaraj#2", name: "Sathiyaraj R", role: "Member", dept: "womens-welfare" },
    "bhavani_mentor": { pass: "Bhavani$2026", name: "Bhavani", role: "Mentor", dept: "womens-welfare" },
    "lavanya_mentor": { pass: "Lavanya$2026", name: "Lavanya", role: "Mentor", dept: "womens-welfare" },
    "kishore_advisor": { pass: "Kishore#3", name: "Kishore I", role: "Advisor", dept: "womens-welfare" },

    // 6. Sports
    "vasuvitha_minister": { pass: "SportsVasuvitha@2026", name: "Vasuvitha J", role: "Minister", dept: "sports" },
    "kaushika_member": { pass: "Kaushika#1", name: "Kaushika K", role: "Member", dept: "sports" },
    "sripriya_mentor": { pass: "Sripriya$2026", name: "Sripriya", role: "Mentor", dept: "sports" },
    "kiruthika_advisor": { pass: "Kiruthika#3", name: "Kiruthika V", role: "Advisor", dept: "sports" },

    // 7. Differently Abled Welfare
    "roshini_minister": { pass: "DifferentlyAbledRoshini@2026", name: "Roshini L", role: "Minister", dept: "differently-abled" },
    "sarmila_member": { pass: "Sarmila#1", name: "Sarmila M", role: "Member", dept: "differently-abled" },
    "santhiya_member": { pass: "Santhiya#2", name: "Santhiya P", role: "Member", dept: "differently-abled" },
    "subitha_mentor": { pass: "Subitha$2026", name: "Subitha", role: "Mentor", dept: "differently-abled" },
    "dhanasekar_mentor": { pass: "Dhanasekar$2026", name: "Dhanasekar", role: "Mentor", dept: "differently-abled" },
    "ashabhavani_mentor": { pass: "AshaBhavani$2026", name: "Asha Bhavani", role: "Mentor", dept: "differently-abled" },
    "muthumathi_advisor": { pass: "MuthuMathi#3", name: "Muthu Mathi M", role: "Advisor", dept: "differently-abled" },

    // 8. Communication
    "bhuvaneshwari_minister": { pass: "CommBhuvaneshwari@2026", name: "Bhuvaneshwari S", role: "Minister", dept: "communication" },
    "yokeshwari_member": { pass: "Yokeshwari#1", name: "Yokeshwari R", role: "Member", dept: "communication" },
    "simbu_member": { pass: "Simbu#2", name: "Simbu K", role: "Member", dept: "communication" },
    "pranav_mentor": { pass: "Pranav$2026", name: "Pranav", role: "Mentor", dept: "communication" },
    "vinothkumar_mentor": { pass: "Vinothkumar$2026", name: "Vinothkumar", role: "Mentor", dept: "communication" },
    "moganagangadevi_advisor": { pass: "MoganagangaDevi#3", name: "Moganaganga Devi P", role: "Advisor", dept: "communication" },

    // 9. Career Development
    "sujitha_minister": { pass: "CareerSujitha@2026", name: "Sujitha S", role: "Minister", dept: "career-development" },
    "praveen_member": { pass: "Praveen#1", name: "Praveen B", role: "Member", dept: "career-development" },
    "sharika_member": { pass: "Sharika#2", name: "Sharika M", role: "Member", dept: "career-development" },
    "valli_mentor": { pass: "Valli$2026", name: "Valli", role: "Mentor", dept: "career-development" },
    "poovarasan_mentor": { pass: "Poovarasan$2026", name: "Poovarasan", role: "Mentor", dept: "career-development" },
    "balu_mentor": { pass: "Balu$2026", name: "Balu", role: "Mentor", dept: "career-development" },
    "mariselvam_advisor": { pass: "MariSelvam#3", name: "Mari Selvam S", role: "Advisor", dept: "career-development" },

    // 10. Agaram Direct Welfare
    "mariyarisha_minister": { pass: "AgaramMariya@2026", name: "Mariya Risha P", role: "Minister", dept: "agaram-direct-welfare" },
    "hemavathy_member": { pass: "Hemavathy#1", name: "Hemavathy M", role: "Member", dept: "agaram-direct-welfare" },
    "sathya_member": { pass: "Sathya#2", name: "Sathya K", role: "Member", dept: "agaram-direct-welfare" },
    "yogarani_mentor": { pass: "Yogarani$2026", name: "Yogarani", role: "Mentor", dept: "agaram-direct-welfare" },
    "karthikacovai_mentor": { pass: "KarthikaCovai$2026", name: "Karthika (Covai)", role: "Mentor", dept: "agaram-direct-welfare" },
    "anandhababu_advisor": { pass: "AnandhaBabu#3", name: "Anandha Babu V", role: "Advisor", dept: "agaram-direct-welfare" },

    // 11. Environment & Climate Change
    "yogesh_minister": { pass: "EnvironmentYogesh@2026", name: "Yogesh V", role: "Minister", dept: "environment" },
    "hemalatha_member": { pass: "Hemalatha#1", name: "Hemalatha K", role: "Member", dept: "environment" },
    "deepak_member": { pass: "Deepak#2", name: "Deepak P", role: "Member", dept: "environment" },
    "divyadharshini_member": { pass: "DivyaDharshini#3", name: "Divya Dharshini N", role: "Member", dept: "environment" },
    "maruthi_member": { pass: "Maruthi#4", name: "Maruthi S", role: "Member", dept: "environment" },
    "ganesh_mentor": { pass: "Ganesh$2026", name: "Ganesh", role: "Mentor", dept: "environment" },
    "satheeshkumarcovai_mentor": { pass: "SatheeshkumarCovai$2026", name: "Satheeshkumar (Covai)", role: "Mentor", dept: "environment" },
    "kanagam_env_mentor": { pass: "Kanagam$2026", name: "Dr. Kanagam", role: "Mentor", dept: "environment" },
    "priyanga_env_mentor": { pass: "Priyanga$2026", name: "Dr. Priyanga", role: "Mentor", dept: "environment" },
    "pranavenv_mentor": { pass: "PranavEnv$2026", name: "Pranav", role: "Mentor", dept: "environment" },
    "ranjith_advisor": { pass: "Ranjith#5", name: "Ranjith A", role: "Advisor", dept: "environment" },
    "rathisha_advisor": { pass: "Rathisha#6", name: "Rathisha R", role: "Advisor", dept: "environment" },

    // 12. Science Research Innovation & Incubation
    "vishal_minister": { pass: "ScienceVishal@2026", name: "Vishal P", role: "Minister", dept: "science" },
    "kanagam_sci_mentor": { pass: "Kanagam$2026", name: "Dr. Kanagam", role: "Mentor", dept: "science" },
    "priyanga_sci_mentor": { pass: "Priyanga$2026", name: "Dr. Priyanga", role: "Mentor", dept: "science" },
    "ranjith_sci_advisor": { pass: "Ranjith#5", name: "Ranjith A", role: "Advisor", dept: "science" },
    "rathisha_sci_advisor": { pass: "Rathisha#6", name: "Rathisha R", role: "Advisor", dept: "science" },
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const userKey = username.trim().toLowerCase();
    const account = authorizedUsers[userKey];

    if (account && account.pass === password.trim()) {
      localStorage.setItem("portalUser", account.name);
      localStorage.setItem("portalRole", account.role);
      localStorage.setItem("portalDept", account.dept);
      
      if (account.role === "Admin") {
        sessionStorage.setItem("adminAuth", "true");
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    } else {
      setError("Invalid username or password. Please check your credentials.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-400 mb-2">Student Council Portal</h1>
          <p className="text-sm text-slate-400">Sign in with your assigned ID and password</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Username / ID</label>
            <input
              type="text"
              placeholder="e.g., mullaikodi_minister or admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500"
              required
            />
          </div>

          {error && <p className="text-xs text-red-400 font-medium">{error}</p>}

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-xl transition text-sm shadow-lg mt-2"
          >
            Sign In to Portal
          </button>
        </form>
      </div>
    </main>
  );
}6