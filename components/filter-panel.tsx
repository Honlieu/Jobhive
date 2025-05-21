"use client"
import * as React from "react"
import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  jobCategories,
  experienceLevels,
  jobTypes,
  locationTypes,
  type JobCategory,
  type ExperienceLevel,
  type JobType,
  type LocationType,
} from "@/lib/data"

interface FilterPanelProps {
  onFilter: (filters: {
    category?: JobCategory
    experienceLevel?: ExperienceLevel
    jobType?: JobType
    location?: string
    locationType?: LocationType
  }) => void
  onSort: (sortBy: "date" | "salary" | "relevance") => void
  activeFilters: {
    category?: JobCategory
    experienceLevel?: ExperienceLevel
    jobType?: JobType
    location?: string
    locationType?: LocationType
  }
  activeSort: "date" | "salary" | "relevance"
}

export default function FilterPanel({ onFilter, onSort, activeFilters, activeSort }: FilterPanelProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState(activeFilters)
  const [sortBy, setSortBy] = useState<"date" | "salary" | "relevance">(activeSort)
  const [location, setLocation] = useState(activeFilters.location || "")

  const handleApplyFilters = () => {
    onFilter(filters)
    onSort(sortBy)
    setIsOpen(false)
  }

  const handleClearFilters = () => {
    setFilters({})
    setSortBy("relevance")
    setLocation("")
  }

  const updateFilters = (key: string, value: any) => {
    if (filters[key as keyof typeof filters] === value) {
      const newFilters = { ...filters }
      delete newFilters[key as keyof typeof filters]
      setFilters(newFilters)
    } else {
      setFilters({ ...filters, [key]: value })
    }
  }

  const updateLocation = (value: string) => {
    setLocation(value)
    if (value) {
      setFilters({ ...filters, location: value })
    } else {
      const newFilters = { ...filters }
      delete newFilters.location
      setFilters(newFilters)
    }
  }

  const getActiveFiltersCount = () => {
    return Object.keys(activeFilters).length + (activeSort !== "relevance" ? 1 : 0)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        <div>
          <div className="font-semibold mb-2">Category</div>
          {jobCategories.map((cat) => (
            <div key={cat.id} className="flex items-center mb-1">
              <Checkbox
                id={`category-${cat.id}`}
                checked={activeFilters.category === cat.id}
                onCheckedChange={() => onFilter({ ...activeFilters, category: cat.id as JobCategory })}
              />
              <Label htmlFor={`category-${cat.id}`} className="ml-2 text-sm">{cat.name}</Label>
            </div>
          ))}
        </div>
        <div>
          <div className="font-semibold mb-2">Experience Level</div>
          {experienceLevels.map((exp) => (
            <div key={exp.id} className="flex items-center mb-1">
              <Checkbox
                id={`exp-${exp.id}`}
                checked={activeFilters.experienceLevel === exp.id}
                onCheckedChange={() => onFilter({ ...activeFilters, experienceLevel: exp.id as ExperienceLevel })}
              />
              <Label htmlFor={`exp-${exp.id}`} className="ml-2 text-sm">{exp.name}</Label>
            </div>
          ))}
        </div>
        <div>
          <div className="font-semibold mb-2">Job Type</div>
          {jobTypes.map((type) => (
            <div key={type.id} className="flex items-center mb-1">
              <Checkbox
                id={`type-${type.id}`}
                checked={activeFilters.jobType === type.id}
                onCheckedChange={() => onFilter({ ...activeFilters, jobType: type.id as JobType })}
              />
              <Label htmlFor={`type-${type.id}`} className="ml-2 text-sm">{type.name}</Label>
            </div>
          ))}
        </div>
        <div>
          <div className="font-semibold mb-2">Work Type</div>
          {locationTypes.map((loc) => (
            <div key={loc.id} className="flex items-center mb-1">
              <Checkbox
                id={`loc-${loc.id}`}
                checked={activeFilters.locationType === loc.id}
                onCheckedChange={() => onFilter({ ...activeFilters, locationType: loc.id as LocationType })}
              />
              <Label htmlFor={`loc-${loc.id}`} className="ml-2 text-sm">{loc.name}</Label>
            </div>
          ))}
        </div>
        <div>
          <div className="font-semibold mb-2">Location</div>
          <Input
            placeholder="Enter city, province..."
            value={activeFilters.location || ""}
            onChange={e => onFilter({ ...activeFilters, location: e.target.value })}
            className="mt-1"
          />
        </div>
        <Button className="w-full mt-4" onClick={() => onFilter({})} variant="outline">Clear filters</Button>
      </div>
    </div>
  )
}
