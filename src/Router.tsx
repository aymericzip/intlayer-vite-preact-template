import { localeMap } from "intlayer";
import { IntlayerProvider } from "preact-intlayer";
import { LocationProvider, Router, Route } from "preact-iso";
import type { ComponentChildren, FunctionalComponent } from "preact";

/**
 * A router component that sets up locale-specific routes.
 * It uses preact-iso to manage navigation and render localized components.
 */
export const LocaleRouter: FunctionalComponent<{
  children: ComponentChildren;
}> = ({ children }) => (
  <LocationProvider>
    <Router>
      {localeMap(({ locale, urlPrefix }) => (
        <Route
          path={`${urlPrefix}/:rest*`}
          component={() => (
            <IntlayerProvider locale={locale}>{children}</IntlayerProvider>
          )}
        />
      ))}
    </Router>
  </LocationProvider>
);
