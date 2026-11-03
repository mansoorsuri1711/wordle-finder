const categories = [
  { name: 'Wordle strategy tips', href: '/blog/wordle-strategy-tips' },
  { name: 'How Wordle colors work', href: '/blog/how-wordle-colors-work' },
  { name: 'Hard mode guide', href: '/blog/wordle-hard-mode-guide' },
  { name: 'Best second guesses', href: '/blog/best-second-wordle-guesses' },
];

export default function BlogCategoryDropdown() {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="rounded-lg border border-ink/10 bg-white px-3 py-1.5 text-sm font-medium text-ink/70 hover:border-teal/40 hover:text-teal-deep"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
