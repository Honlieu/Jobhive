import { useMemo } from "react"
import { mockJobs, jobCategories } from "@/lib/data"
import { useRouter } from "next/navigation"

const CATEGORY_CARD_META = [
  {
    id: "it",
    label: "IT & Software",
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
  },
  {
    id: "marketing",
    label: "Marketing - PR - Advertising",
    icon: "https://cdn-icons-png.flaticon.com/512/1814/1814562.png",
  },
  {
    id: "finance",
    label: "Finance - Banking - Insurance",
    icon: "https://cdn-icons-png.flaticon.com/512/16119/16119891.png",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: "https://i.pinimg.com/736x/25/dc/47/25dc4724f96ecead1872f71ec2b4c57d.jpg",
  },
  {
    id: "government",
    label: "Government & Public Sector",
    icon: "https://cdn-icons-png.flaticon.com/256/6715/6715901.png",
  },
]

export default function TopCategories() {
  const router = useRouter();
  const categoryStats = useMemo(() => {
    return CATEGORY_CARD_META.map((cat) => {
      const count = mockJobs.filter((job) => job.category === cat.id).length
      return { ...cat, count }
    })
  }, [])

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-green-400 mb-2">Top Featured Industries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categoryStats.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-xl p-6 flex flex-col items-center shadow hover:scale-105 transition-transform cursor-pointer"
            onClick={() => router.push(`/find-jobs?category=${cat.id}`)}
          >
            <img src={cat.icon} alt={cat.label} className="w-16 h-16 mb-4" />
            <div className="font-semibold text-center text-gray-900 mb-2">{cat.label}</div>
            <div className="text-green-500 font-bold text-lg">{cat.count.toLocaleString()} jobs</div>
          </div>
        ))}
      </div>
    </section>
  )
}
