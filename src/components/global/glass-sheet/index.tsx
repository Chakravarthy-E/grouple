import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type GlassSheetProps = {
    children: React.ReactNode
    trigger: React.ReactNode
    className?: string
    triggerClass?: string
}
function GlassSheet({
    children,
    trigger,
    triggerClass,
    className,
}: GlassSheetProps) {
    return (
        <Sheet>
            <SheetTrigger className={cn(triggerClass)} asChild>
                {trigger}
            </SheetTrigger>
            <SheetContent
                className={
                    (cn(
                        "bg-clip-padding backdrop-filter backdrop-blur__safari backdrop-blur-3xl bg-opacity-20 bg-themeGray",
                    ),
                    className)
                }
            >
                {children}
            </SheetContent>
        </Sheet>
    )
}

export default GlassSheet
