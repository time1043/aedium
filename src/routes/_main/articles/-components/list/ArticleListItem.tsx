import { HeartIcon } from '@phosphor-icons/react';

export default function ArticleListItem() {
  return (
    <li className="list-row flex flex-col gap-2">
      <div className="flex flex-row gap-4">
        {/* Title + ContentBrief */}
        <div className="group flex flex-1 cursor-pointer flex-col gap-2">
          <h2 className="text-xl leading-7 font-bold tracking-tight text-base-content decoration-1 underline-offset-2 group-hover:underline md:text-2xl">
            The Pattern I Notice in Every High-Quality Codebase
          </h2>
          <p className="line-clamp-2 font-serif text-sm leading-relaxed text-base-content/70 md:text-base">
            It’s hiding in plain sight, and you’ve probably already seen it today. This pattern
            defines how senior engineers think about architecture...
          </p>
        </div>

        {/* Cover */}
        <div>
          <img
            className="size-20 rounded-box lg:size-30"
            src="https://img.daisyui.com/images/profile/demo/1@94.webp"
          />
        </div>
      </div>

      {/* PublishTime + Like */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-base-content/50">Jan 24, 2024</span>
        <div className="flex items-center">
          <button className="btn btn-square btn-ghost btn-secondary">
            <div className="sm:tooltip" data-tip="Like">
              <HeartIcon size={24} />
            </div>
          </button>
        </div>
      </div>
    </li>
  );
}
