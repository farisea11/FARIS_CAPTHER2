export interface BlogPost {
  id: number;
  name: string;
  category: string;
  description: string;
}

export const blogPosts: BlogPost[] = [
  {
     id: 1,
     name: "Olahraga sehat",
     description: "Saya berusaha menjaga kesehatan dengan rajin berolahraga,makan makanan bergizi seimbang, minum cukup air putih, tidur yang cukup, serta menjaga kebersihan diri dan lingkungan.",
     category: "Olahraga"
   },
   {
     id: 2,
     name: "Makanan sehat",
     description: "Makanan sehat untuk tubuh antara lain sayur-sayuran seperti bayam dan brokoli, buah-buahan seperti apel dan jeruk, sumber protein seperti ikan, telur, tahu, serta karbohidrat sehat seperti nasi merah atau kentang, yang semuanya bermanfaat untuk menjaga kesehatan dan memberi energi.",
     category: "Makanan"
   },
   {
     id: 3,
     name: "Minuman sehat",
     description: "Minuman sehat untuk tubuh misalnya air putih, susu rendah lemak, jus buah tanpa gula, dan teh herbal, yang bermanfaat untuk menjaga daya tahan tubuh serta memberi kesegaran.",
     category: "Minuman"
   },
   {
     id: 4,
     name: "Pendidikan sehat",
     description: "Pendidikan adalah proses belajar yang bertujuan untuk mengembangkan pengetahuan, keterampilan, dan sikap seseorang agar dapat menghadapi kehidupan dengan lebih baik.",
     category: "Pendidikan"
   }, 
   {
     id: 5,
     name: "Bitcoin",
     description: "Bitcoin adalah mata uang digital atau cryptocurrency yang digunakan sebagai alat tukar secara online dan berjalan di jaringan blockchain tanpa dikendalikan oleh pihak tertentu seperti bank atau pemerintah.",
     category: "Bitcoin" 
   },
 ]
