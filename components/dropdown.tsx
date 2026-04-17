import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel
} from "@/components/ui/select"
import Button from "./ui/button"
import { ChevronDown } from "lucide-react"

type DropdownProps = {
    placeholder: string
    items: Array<item>
}
type item = {
    label: string
    value: string | null
}

export default function Dropdown({placeholder, items}: DropdownProps) {
    return (
        <Select items={items}>
            <SelectTrigger>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{placeholder}</SelectLabel>
                    {items?.map(item => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}