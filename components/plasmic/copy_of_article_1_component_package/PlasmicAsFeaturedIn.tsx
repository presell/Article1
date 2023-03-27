// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6TTzWJDNcVi4SRDtzdAGEU
// Component: KaSkA68BxtQX4

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_article_1_component_package.module.css"; // plasmic-import: 6TTzWJDNcVi4SRDtzdAGEU/projectcss
import sty from "./PlasmicAsFeaturedIn.module.css"; // plasmic-import: KaSkA68BxtQX4/css

export type PlasmicAsFeaturedIn__VariantMembers = {};
export type PlasmicAsFeaturedIn__VariantsArgs = {};
type VariantPropType = keyof PlasmicAsFeaturedIn__VariantsArgs;
export const PlasmicAsFeaturedIn__VariantProps = new Array<VariantPropType>();

export type PlasmicAsFeaturedIn__ArgsType = {};
type ArgPropType = keyof PlasmicAsFeaturedIn__ArgsType;
export const PlasmicAsFeaturedIn__ArgProps = new Array<ArgPropType>();

export type PlasmicAsFeaturedIn__OverridesType = {
  div8?: p.Flex<"div">;
  asFeaturedIn?: p.Flex<"div">;
  text?: p.Flex<"div">;
  nwBrandlogopng?: p.Flex<"div">;
};

export interface DefaultAsFeaturedInProps {
  className?: string;
}

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

function PlasmicAsFeaturedIn__RenderFunc(props: {
  variants: PlasmicAsFeaturedIn__VariantsArgs;
  args: PlasmicAsFeaturedIn__ArgsType;
  overrides: PlasmicAsFeaturedIn__OverridesType;
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

  return (
    <div
      data-plasmic-name={"div8"}
      data-plasmic-override={overrides.div8}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.div8
      )}
    >
      <div
        data-plasmic-name={"asFeaturedIn"}
        data-plasmic-override={overrides.asFeaturedIn}
        className={classNames(projectcss.all, sty.asFeaturedIn)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"As Featured In:"}
        </div>
      </div>
      <div
        data-plasmic-name={"nwBrandlogopng"}
        data-plasmic-override={overrides.nwBrandlogopng}
        className={classNames(projectcss.all, sty.nwBrandlogopng)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  div8: ["div8", "asFeaturedIn", "text", "nwBrandlogopng"],
  asFeaturedIn: ["asFeaturedIn", "text"],
  text: ["text"],
  nwBrandlogopng: ["nwBrandlogopng"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  div8: "div";
  asFeaturedIn: "div";
  text: "div";
  nwBrandlogopng: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAsFeaturedIn__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAsFeaturedIn__VariantsArgs;
    args?: PlasmicAsFeaturedIn__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAsFeaturedIn__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAsFeaturedIn__ArgsType,
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
          internalArgPropNames: PlasmicAsFeaturedIn__ArgProps,
          internalVariantPropNames: PlasmicAsFeaturedIn__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAsFeaturedIn__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "div8") {
    func.displayName = "PlasmicAsFeaturedIn";
  } else {
    func.displayName = `PlasmicAsFeaturedIn.${nodeName}`;
  }
  return func;
}

export const PlasmicAsFeaturedIn = Object.assign(
  // Top-level PlasmicAsFeaturedIn renders the root element
  makeNodeComponent("div8"),
  {
    // Helper components rendering sub-elements
    asFeaturedIn: makeNodeComponent("asFeaturedIn"),
    text: makeNodeComponent("text"),
    nwBrandlogopng: makeNodeComponent("nwBrandlogopng"),

    // Metadata about props expected for PlasmicAsFeaturedIn
    internalVariantProps: PlasmicAsFeaturedIn__VariantProps,
    internalArgProps: PlasmicAsFeaturedIn__ArgProps
  }
);

export default PlasmicAsFeaturedIn;
/* prettier-ignore-end */
