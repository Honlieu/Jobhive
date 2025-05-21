"use client"

import { useState, useEffect } from "react"
import FilterPanel from "@/components/filter-panel"
import { mockJobs, filterJobs } from "@/lib/data"
import JobCard from "@/components/job-card"
import { useRouter, useSearchParams } from "next/navigation"

export default function FindJobsPage() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState({})
  const [sortBy, setSortBy] = useState<"relevance" | "date" | "salary">("relevance")
  const [jobs, setJobs] = useState(mockJobs)
  const router = useRouter();

  // Filter by category if present in URL
  useEffect(() => {
    const category = searchParams.get("category")
    let filtered = mockJobs
    if (category) {
      filtered = filterJobs(mockJobs, { category: [category] })
      setFilters((prev) => ({ ...prev, category }))
    }
    setJobs(filtered)
  }, [searchParams])

  // Dummy filter/sort logic for demo
  const handleFilter = (newFilters: any) => {
    setFilters(newFilters)
    // You can add real filter logic here
    let filtered = mockJobs
    if (newFilters.category) {
      filtered = filterJobs(mockJobs, { category: [newFilters.category] })
    }
    setJobs(filtered)
  }
  const handleSort = (sort: "relevance" | "date" | "salary") => {
    setSortBy(sort)
    // You can add real sort logic here
  }

  return (
    <div className="container flex gap-8 py-8">
      <div className="w-80 shrink-0">
        <FilterPanel onFilter={handleFilter} onSort={handleSort} activeFilters={filters} activeSort={sortBy} />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">Job Listings</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div key={job.id} onClick={() => router.push(`/jobs/${job.id}`)} className="cursor-pointer">
              <JobCard job={job} onSave={() => {}} isSaved={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
