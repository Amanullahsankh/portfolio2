import os
import re

files_to_process = [
    r"c:\Users\amans\Downloads\sequence\portfolio\src\app\layout.tsx",
    r"c:\Users\amans\Downloads\sequence\portfolio\src\app\page.tsx",
    r"c:\Users\amans\Downloads\sequence\portfolio\src\app\globals.css",
    r"c:\Users\amans\Downloads\sequence\portfolio\src\components\About.tsx",
    r"c:\Users\amans\Downloads\sequence\portfolio\src\components\Achievements.tsx",
    r"c:\Users\amans\Downloads\sequence\portfolio\src\components\Contact.tsx",
    r"c:\Users\amans\Downloads\sequence\portfolio\src\components\Education.tsx",
    r"c:\Users\amans\Downloads\sequence\portfolio\src\components\Overlay.tsx",
    r"c:\Users\amans\Downloads\sequence\portfolio\src\components\ScrollyCanvas.tsx",
    r"c:\Users\amans\Downloads\sequence\portfolio\src\components\Skills.tsx",
]

for filepath in files_to_process:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 1. Backgrounds
    content = content.replace("bg-[#121212]", "bg-[#FFFFFF]")
    content = content.replace('ctx.fillStyle = "#121212"', 'ctx.fillStyle = "#FFFFFF"')
    content = content.replace("--background: #121212;", "--background: #ffffff;")
    
    # 2. Text colors
    content = content.replace("text-white", "text-[#1A1A1A]")
    content = content.replace("text-white/5", "text-[#1A1A1A]/5")
    content = content.replace("text-white/10", "text-[#1A1A1A]/10")
    content = content.replace("text-white/20", "text-[#1A1A1A]/20")
    content = content.replace("text-white/30", "text-[#1A1A1A]/30")
    content = content.replace("text-white/40", "text-[#1A1A1A]/40")
    content = content.replace("text-white/50", "text-[#1A1A1A]/50")
    content = content.replace("text-white/60", "text-[#1A1A1A]/60")
    content = content.replace("text-white/70", "text-[#1A1A1A]/80") # make a bit darker for contrast
    content = content.replace("text-white/80", "text-[#1A1A1A]/90")
    content = content.replace("text-white/90", "text-[#1A1A1A]")
    content = content.replace("--foreground: #ffffff;", "--foreground: #1a1a1a;")

    # 3. Borders & Background Opacities & Placeholders
    # Replacing "-white" and "/white" with "-[#1A1A1A]" is tricky, let's be explicitly careful
    for x in ["bg", "border", "from", "via", "to", "placeholder", "hover:bg", "hover:border", "group-hover:bg", "group-hover:text", "focus:border", "hover:text"]:
        content = content.replace(f"{x}-white", f"{x}-black") # initially use black so we can replace later or just use #1A1A1A
        content = content.replace(f"{x}-black/[", f"{x}-[#1A1A1A]/[")
        content = content.replace(f"{x}-black/", f"{x}-[#1A1A1A]/")
        content = content.replace(f"{x}-black", f"{x}-[#1A1A1A]")
        
        # fix the generic replacements above which might have resulted in nested brackets 
        content = content.replace(f"{x}-[[#1A1A1A]]", f"{x}-[#1A1A1A]")

    # Specific replacements
    content = content.replace('className="dark"', 'className="light"')
    content = content.replace('selection:bg-[#1A1A1A]/30 selection:text-[#1A1A1A]', 'selection:bg-[#1A1A1A]/20 selection:text-[#1A1A1A]')
    content = content.replace('selection:bg-white/30 selection:text-white', 'selection:bg-[#1A1A1A]/20 selection:text-[#1A1A1A]')
    
    # Overlays specific
    content = content.replace('from-zinc-300 to-zinc-600', 'from-zinc-600 to-zinc-900')

    # Fix generic replacements that broke stuff:
    # `text-[#1A1A1A]` -> `text-[#1A1A1A]` already handled, but `group-hover:text-[#1A1A1A]` was generated if it was `group-hover:text-white`. 
    # Let's check for any `text-black` or `text-[#121212]` that needs fixing:
    # if it was `hover:text-black`, it became `hover:text-[#1A1A1A]` (which is correct for dark text) wait: previously it was `hover:text-black` on a light background.
    content = content.replace('hover:text-black', 'hover:text-white')
    content = content.replace('group-hover:text-black', 'group-hover:text-[#FFFFFF]')
    # Wait, the previous code had `group-hover:bg-white group-hover:text-black`. It became `group-hover:bg-[#1A1A1A] group-hover:text-[#FFFFFF]`.
    # Let's refine this below.

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Processed: {filepath}")
