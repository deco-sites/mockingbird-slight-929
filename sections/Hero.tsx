import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /**
   * @format rich-text
   * @default "Click here to tweak this text however you want."
   * @description The title of the component.
   */
  title?: string;
  /**
   * @default "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away."
   * @description The description of the component.
   */
  description?: string;
  background?: ImageWidget;
  /**
   * @description The image object of the component.
   */
  image?: string;
  /**
   * @default "left"
   * @description The placement of the component.
   */
  placement?: "left" | "right";
  /**
   * @default [
   *   { id: "change-me-1", href: "/", text: "Change me", outline: false },
   *   { id: "change-me-2", href: "/", text: "Change me", outline: true },
   * ]
   * @description The Call to Action buttons of the component.
   */
  cta?: CTA[];
}

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description = "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  image = "/default-image.jpg",
  placement = "left",
  background = "/default-image.jpg"
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: Props) {
  return (
    <nav 
    style={{
                background: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%", 
                height: "100%"
              }}
    class="lg:container lg:mx-auto mx-4" style="background-color: tomato;">
      <div class="flex flex-col items-center gap-8">
        <div
          class={`flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 ${
            image ? placement : "flex-col items-center justify-center text-center"
          } lg:py-36 gap-12 md:gap-20 items-center`}
        >
          {image && (
            <div
              style={{
                background: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%", 
                height: "100%"
              }}
            ></div>
          )}
          <div
            class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 ${
              image ? "lg:w-1/2 lg:max-w-xl" : "flex flex-col items-center justify-center lg:max-w-3xl"
            }`}
          >
            <div
              class="inline-block lg:text-[80px] text-4xl leading-none font-medium"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            >
            </div>
            <p class="text-lg md:text-md leading-[150%]">
              {description}
            </p>
            <div class="flex items-center gap-3">
              {cta?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href?.includes("http") ? "_blank" : "_self"}
                  class={`font-normal btn btn-primary ${item.outline ? "btn-outline" : ""}`}
                >
                  {item?.text}
                </a>
              ))}
              <a
                href="/checkout"
                class="btn btn-primary"
              >
                Go to checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
