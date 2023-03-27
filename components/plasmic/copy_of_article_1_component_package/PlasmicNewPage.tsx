// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6TTzWJDNcVi4SRDtzdAGEU
// Component: bAzkDQxfI1

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import _320PxAnncoumentFinal from "../../_320PxAnncoumentFinal"; // plasmic-import: scWPeMdD2O/component
import _320PxNavBarI from "../../_320PxNavBarI"; // plasmic-import: ZTnFzgfwG8/component
import _320PxImageIcons from "../../_320PxImageIcons"; // plasmic-import: aNBuNCGjgCi/component
import _320PxCwOfferBogo from "../../_320PxCwOfferBogo"; // plasmic-import: 6WUd4gVKXAq/component
import _320Px3Pack from "../../_320Px3Pack"; // plasmic-import: uNIQJifW4Lt/component

import { useScreenVariants as useScreenVariantsfHgQcRtV3Zer } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: f_hgQCRtV3ZER/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_article_1_component_package.module.css"; // plasmic-import: 6TTzWJDNcVi4SRDtzdAGEU/projectcss
import sty from "./PlasmicNewPage.module.css"; // plasmic-import: bAzkDQxfI1/css

export type PlasmicNewPage__VariantMembers = {};
export type PlasmicNewPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage__VariantsArgs;
export const PlasmicNewPage__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage__ArgsType;
export const PlasmicNewPage__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  _320PxAnncoumentFinal?: p.Flex<typeof _320PxAnncoumentFinal>;
  _320PxNavBarI?: p.Flex<typeof _320PxNavBarI>;
  _320PxImageIcons?: p.Flex<typeof _320PxImageIcons>;
  _320PxCwOfferBogo?: p.Flex<typeof _320PxCwOfferBogo>;
  _320Px3Pack?: p.Flex<typeof _320Px3Pack>;
};

export interface DefaultNewPageProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNewPage__RenderFunc(props: {
  variants: PlasmicNewPage__VariantsArgs;
  args: PlasmicNewPage__ArgsType;
  overrides: PlasmicNewPage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsfHgQcRtV3Zer()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          {(
            hasVariant(globalVariants, "screen", "smallestMobile") ? true : true
          ) ? (
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              {(
                hasVariant(globalVariants, "screen", "smallestMobile")
                  ? true
                  : true
              ) ? (
                <_320PxAnncoumentFinal
                  data-plasmic-name={"_320PxAnncoumentFinal"}
                  data-plasmic-override={overrides._320PxAnncoumentFinal}
                  className={classNames(
                    "__wab_instance",
                    sty._320PxAnncoumentFinal
                  )}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "smallestMobile")
                  ? true
                  : true
              ) ? (
                <_320PxNavBarI
                  data-plasmic-name={"_320PxNavBarI"}
                  data-plasmic-override={overrides._320PxNavBarI}
                  className={classNames("__wab_instance", sty._320PxNavBarI)}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "smallestMobile")
                  ? true
                  : true
              ) ? (
                <_320PxImageIcons
                  data-plasmic-name={"_320PxImageIcons"}
                  data-plasmic-override={overrides._320PxImageIcons}
                  className={classNames("__wab_instance", sty._320PxImageIcons)}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "smallestMobile")
                  ? true
                  : true
              ) ? (
                <_320PxCwOfferBogo
                  data-plasmic-name={"_320PxCwOfferBogo"}
                  data-plasmic-override={overrides._320PxCwOfferBogo}
                  className={classNames(
                    "__wab_instance",
                    sty._320PxCwOfferBogo
                  )}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "smallestMobile")
                  ? true
                  : true
              ) ? (
                <_320Px3Pack
                  data-plasmic-name={"_320Px3Pack"}
                  data-plasmic-override={overrides._320Px3Pack}
                  className={classNames("__wab_instance", sty._320Px3Pack)}
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "_320PxAnncoumentFinal",
    "_320PxNavBarI",
    "_320PxImageIcons",
    "_320PxCwOfferBogo",
    "_320Px3Pack"
  ],
  freeBox: [
    "freeBox",
    "_320PxAnncoumentFinal",
    "_320PxNavBarI",
    "_320PxImageIcons",
    "_320PxCwOfferBogo",
    "_320Px3Pack"
  ],
  _320PxAnncoumentFinal: ["_320PxAnncoumentFinal"],
  _320PxNavBarI: ["_320PxNavBarI"],
  _320PxImageIcons: ["_320PxImageIcons"],
  _320PxCwOfferBogo: ["_320PxCwOfferBogo"],
  _320Px3Pack: ["_320Px3Pack"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  _320PxAnncoumentFinal: typeof _320PxAnncoumentFinal;
  _320PxNavBarI: typeof _320PxNavBarI;
  _320PxImageIcons: typeof _320PxImageIcons;
  _320PxCwOfferBogo: typeof _320PxCwOfferBogo;
  _320Px3Pack: typeof _320Px3Pack;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage__VariantsArgs;
    args?: PlasmicNewPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewPage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNewPage__ArgProps,
          internalVariantPropNames: PlasmicNewPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage";
  } else {
    func.displayName = `PlasmicNewPage.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage = Object.assign(
  // Top-level PlasmicNewPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    _320PxAnncoumentFinal: makeNodeComponent("_320PxAnncoumentFinal"),
    _320PxNavBarI: makeNodeComponent("_320PxNavBarI"),
    _320PxImageIcons: makeNodeComponent("_320PxImageIcons"),
    _320PxCwOfferBogo: makeNodeComponent("_320PxCwOfferBogo"),
    _320Px3Pack: makeNodeComponent("_320Px3Pack"),

    // Metadata about props expected for PlasmicNewPage
    internalVariantProps: PlasmicNewPage__VariantProps,
    internalArgProps: PlasmicNewPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage;
/* prettier-ignore-end */