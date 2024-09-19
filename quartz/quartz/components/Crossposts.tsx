import { formatDate } from "./Date"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/backlinks.scss"
import { resolveRelative, simplifySlug } from "../util/path"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

const Crossposts: QuartzComponent = ({
  fileData,
  displayClass,
  cfg,
}: QuartzComponentProps) => {
  const crossposts = fileData.frontmatter["crossposts"]
  if (crossposts == null || crossposts.length == 0) {
    return <></>
  }
  crossposts.sort(function(a, b) {
    return b.time - a.time;
  })
  return (
    <div class={classNames(displayClass, "crossposts")}>
      <h3>Crossposts</h3>
      <ul class="overflow">
        {crossposts.map((f) => {
          const host = new URL(f.url).host
          switch (host) {

            case "cohost.org":
            case "www.cohost.org":
              return (
                <li>
                  {formatDate(new Date(f.time)!, cfg.locale)}
                  <br/>
                  <img src="/static/cohost.svg"/>&nbsp;
                  <a href={f.url} class="external">
                    cohost!
                  </a>
                </li>
              )

            case "exodrifter.itch.io":
              return (
                <li>
                  {formatDate(new Date(f.time)!, cfg.locale)}
                  <br/>
                  <img src="/static/itch.svg"/>&nbsp;
                  <a href={f.url} class="external">
                    itch.io
                  </a>
                </li>
              )

            case "patreon.com":
            case "www.patreon.com":
              return (
                <li>
                  {formatDate(new Date(f.time)!, cfg.locale)}
                  <br/>
                  <i class="ri-patreon-fill"></i>&nbsp;
                  <a href={f.url} class="external">
                    Patreon
                  </a>
                </li>
              )

            case "store.steampowered.com":
              return (
                <li>
                  {formatDate(new Date(f.time)!, cfg.locale)}
                  <br/>
                  <i class="ri-steam-fill"></i>&nbsp;
                  <a href={f.url} class="external">
                    Steam
                  </a>
                </li>
              )

            default:
              return (
                <li>
                  {formatDate(new Date(f.time)!, cfg.locale)}
                  <br/>
                  <a href={f.url} class="external">
                    {host}
                  </a>
                </li>
              )
          }
        })}
      </ul>
    </div>
  )
}

Crossposts.css = style
export default (() => Crossposts) satisfies QuartzComponentConstructor
