import { useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import fallbackCover from "@/assets/blog-fallback-cover.jpg";

interface BlogImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "onError" | "onLoad"> {
  src?: string | null;
  alt: string;
  /** Tailwind aspect ratio class. Defaults to 16:9 to enforce consistency. */
  aspectClassName?: string;
  /** Wrapper class — sizing should usually go here, not on the <img>. */
  wrapperClassName?: string;
  /** Eager-load (for hero / above-the-fold). Defaults to lazy. */
  eager?: boolean;
  /** Optional caption rendered as <figcaption>. */
  caption?: string;
}

/**
 * Consistent, accessible, performance-friendly blog image.
 * - Forces 16:9 aspect ratio (no layout shift, no stretching)
 * - object-cover for distortion-free fill
 * - Skeleton placeholder while loading
 * - Branded fallback if src is missing or fails to load
 * - Lazy loading + async decoding by default
 */
const BlogImage = ({
  src,
  alt,
  aspectClassName = "aspect-[16/9]",
  wrapperClassName,
  className,
  eager = false,
  caption,
  title,
  ...rest
}: BlogImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const resolvedSrc = !src || errored ? fallbackCover : src;

  const img = (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg bg-muted",
        aspectClassName,
        wrapperClassName
      )}
    >
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted to-secondary/40"
          aria-hidden="true"
        />
      )}
      <img
        {...rest}
        src={resolvedSrc}
        alt={alt}
        title={title ?? alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        width={1200}
        height={675}
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (!errored) {
            // eslint-disable-next-line no-console
            console.warn("[BlogImage] Failed to load image, using fallback:", src);
            setErrored(true);
            setLoaded(false);
          }
        }}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
      />
    </div>
  );

  if (caption) {
    return (
      <figure className="space-y-2">
        {img}
        <figcaption className="text-sm text-muted-foreground italic text-center">
          {caption}
        </figcaption>
      </figure>
    );
  }
  return img;
};

export default BlogImage;
