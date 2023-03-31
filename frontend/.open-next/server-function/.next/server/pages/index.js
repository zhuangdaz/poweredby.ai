"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 862:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OverlaySuggestion)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




var FormSteps;
(function(FormSteps) {
    FormSteps["Initial"] = "Initial";
    FormSteps["Success"] = "Success";
    FormSteps["Error"] = "Error";
})(FormSteps || (FormSteps = {}));
function OverlaySuggestion({ onClose , isOpen  }) {
    const [formStep, setFormStep] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(FormSteps.Initial);
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [link, setLink] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleProductNameChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event)=>setName(event.currentTarget.value), [
        setName
    ]);
    const handleLinkChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event)=>setLink(event.currentTarget.value), [
        setLink
    ]);
    const handleDescriptionChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event)=>setDescription(event.currentTarget.value), [
        setDescription
    ]);
    const handleEmailChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event)=>setEmail(event.currentTarget.value), [
        setEmail
    ]);
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (event)=>{
        event.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("/api/submission", {
                method: "post",
                body: JSON.stringify({
                    name,
                    link,
                    description,
                    email
                })
            });
            const res = await response.json();
            if (res.error) {
                throw Error;
            }
            setLoading(false);
            setFormStep(FormSteps.Success);
        } catch (error) {
            setLoading(false);
            setFormStep(FormSteps.Error);
        }
    }, [
        name,
        link,
        description,
        email
    ]);
    if (formStep === FormSteps.Success) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
            isOpen: isOpen,
            onClose: onClose,
            onCloseComplete: ()=>setFormStep(FormSteps.Initial),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalOverlay, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalContent, {
                    bg: "dark_grey",
                    maxW: "sm",
                    p: "1rem",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalCloseButton, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalBody, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiCheckCircle, {
                                        size: "40"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        children: "Thank you for your submission."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        children: "We will carefully review every entry."
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
        isOpen: isOpen,
        onClose: onClose,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalContent, {
                bg: "black",
                maxW: "sm",
                p: "1rem",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalHeader, {
                        children: "Recommend a product"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalCloseButton, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalBody, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                            id: "new-form",
                            onSubmit: handleSubmit,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        size: "xs",
                                        fontSize: "xs",
                                        opacity: "0.6",
                                        children: [
                                            "You can also tag",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                                href: "https://twitter.com/poweredby_ai",
                                                target: "_blank",
                                                rel: "noopener",
                                                color: "teal.500",
                                                children: "@poweredby_ai"
                                            }),
                                            " ",
                                            "on Twitter to recommend a product."
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                        mt: "1rem",
                                        placeholder: "Product name",
                                        _placeholder: {
                                            fontSize: "xs"
                                        },
                                        onChange: handleProductNameChange
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                        mt: "1rem",
                                        placeholder: "Website",
                                        _placeholder: {
                                            fontSize: "xs"
                                        },
                                        onChange: handleLinkChange
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Textarea, {
                                        mt: "1rem",
                                        placeholder: "Description",
                                        resize: "none",
                                        _placeholder: {
                                            fontSize: "xs"
                                        },
                                        onChange: handleDescriptionChange,
                                        size: "lg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                        mt: "1rem",
                                        placeholder: "Email(optional) so we can thank you!",
                                        _placeholder: {
                                            fontSize: "xs"
                                        },
                                        onChange: handleEmailChange
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            bg: "white",
                            color: "black",
                            px: "3rem",
                            w: "full",
                            type: "submit",
                            form: "new-form",
                            disabled: loading,
                            _hover: {
                                transform: "translateY(-2px)",
                                boxShadow: "lg"
                            },
                            children: "Submit"
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 187:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ProductCreator */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ProductTags = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
        spacing: 2,
        marginTop: props.marginTop,
        children: props.tags.map((tag)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tag, {
                size: "md",
                variant: "solid",
                colorScheme: "facebook",
                children: tag
            }, tag);
        })
    });
};
const ProductCreator = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
        marginTop: "2",
        spacing: "2",
        display: "flex",
        alignItems: "center",
        fontSize: "sm",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "xs",
                children: "made by "
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontWeight: "medium",
                children: props.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                children: props.date.toLocaleDateString()
            })
        ]
    });
};
const ProductList = ({ products  })=>{
    const featuredProduct = products.at(0);
    const previousProducts = products.slice(1);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
        maxW: "7xl",
        p: "12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                as: "h1",
                children: "Featured Product of the Day"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                marginTop: {
                    base: "1",
                    sm: "5"
                },
                display: "flex",
                flexDirection: {
                    base: "column",
                    sm: "row"
                },
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        display: "flex",
                        flex: "1",
                        marginRight: "3",
                        position: "relative",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                width: {
                                    base: "100%",
                                    sm: "85%"
                                },
                                zIndex: "2",
                                marginLeft: {
                                    base: "0",
                                    sm: "5%"
                                },
                                marginTop: "5%",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                    textDecoration: "none",
                                    _hover: {
                                        textDecoration: "none"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        borderRadius: "lg",
                                        src: featuredProduct.images[0],
                                        alt: "some good alt text",
                                        objectFit: "contain"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                zIndex: "1",
                                width: "100%",
                                position: "absolute",
                                height: "100%",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    bgGradient: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("radial(orange.600 1px, transparent 1px)", "radial(orange.300 1px, transparent 1px)"),
                                    backgroundSize: "20px 20px",
                                    opacity: "0.4",
                                    height: "100%"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        display: "flex",
                        flex: "1",
                        flexDirection: "column",
                        justifyContent: "center",
                        marginTop: {
                            base: "3",
                            sm: "0"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProductTags, {
                                tags: featuredProduct.tags
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                marginTop: "1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                    textDecoration: "none",
                                    _hover: {
                                        textDecoration: "none"
                                    },
                                    children: featuredProduct?.name
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                as: "p",
                                marginTop: "2",
                                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.700", "gray.200"),
                                fontSize: "lg",
                                children: featuredProduct?.summary
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProductCreator, {
                                name: featuredProduct?.creator || "",
                                date: new Date(featuredProduct?.postedAt)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                as: "h2",
                marginTop: "5",
                children: "Latest products"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                marginTop: "5"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Wrap, {
                spacing: "1rem",
                marginTop: "5",
                children: previousProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.WrapItem, {
                        width: {
                            base: "100%",
                            sm: "45%",
                            md: "45%",
                            lg: "30%"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            w: "100%",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    borderRadius: "lg",
                                    overflow: "hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                        textDecoration: "none",
                                        _hover: {
                                            textDecoration: "none"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                            transform: "scale(1.0)",
                                            src: product.images[0],
                                            alt: "some text",
                                            objectFit: "contain",
                                            width: "100%",
                                            transition: "0.3s ease-in-out",
                                            _hover: {
                                                transform: "scale(1.05)"
                                            }
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProductTags, {
                                    tags: product.tags,
                                    marginTop: "3"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                    fontSize: "l",
                                    marginTop: "2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                        textDecoration: "none",
                                        _hover: {
                                            textDecoration: "none"
                                        },
                                        children: product.name
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    as: "p",
                                    fontSize: "sm",
                                    marginTop: "2",
                                    lineHeight: "1.25",
                                    children: product.summary
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProductCreator, {
                                    name: product.creator,
                                    date: new Date(featuredProduct?.postedAt)
                                })
                            ]
                        })
                    }, product.name))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SimpleSidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(210);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const LinkItems = [
    {
        name: "Home",
        icon: react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiHome
    }
];
function SimpleSidebar({ children  }) {
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        minH: "100vh",
        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("black", "black"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarContent, {
                onClose: ()=>onClose,
                display: {
                    base: "none",
                    md: "block"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Drawer, {
                autoFocus: false,
                isOpen: isOpen,
                placement: "left",
                onClose: onClose,
                returnFocusOnClose: false,
                onOverlayClick: onClose,
                size: "full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.DrawerContent, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarContent, {
                        onClose: onClose
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileNav, {
                display: {
                    base: "flex",
                    md: "none"
                },
                onOpen: onOpen
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                ml: {
                    base: 0,
                    md: 60
                },
                p: "4",
                children: children
            })
        ]
    });
}
const SidebarContent = ({ onClose , ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        borderRight: "1px",
        borderRightColor: "gray.700",
        w: {
            base: "full",
            md: 60
        },
        pos: "fixed",
        h: "full",
        ...rest,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            direction: "column",
            h: "full",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                            h: "20",
                            alignItems: "center",
                            mx: "8",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    fontSize: "xl",
                                    fontFamily: "monospace",
                                    fontWeight: "bold",
                                    children: "poweredby.ai"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.CloseButton, {
                                    display: {
                                        base: "flex",
                                        md: "none"
                                    },
                                    onClick: onClose
                                })
                            ]
                        }),
                        LinkItems.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                                icon: link.icon,
                                fontSize: "l",
                                fontFamily: "monospace",
                                fontWeight: "bold",
                                children: link.name
                            }, link.name))
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spacer, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    padding: "2rem",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        fontSize: "xs",
                        fontFamily: "monospace",
                        children: "poweredby.ai is a curated list of exciting products powered by AI. this site is still in its early stage. appreciate suggestions and feedback of all kinds!"
                    })
                })
            ]
        })
    });
};
const NavItem = ({ icon , children , ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
        href: "#",
        style: {
            textDecoration: "none"
        },
        _focus: {
            boxShadow: "none"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            align: "center",
            p: "4",
            mx: "4",
            borderRadius: "lg",
            role: "group",
            cursor: "pointer",
            _hover: {
                bg: "gray.500",
                color: "white"
            },
            ...rest,
            children: [
                icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                    mr: "4",
                    fontSize: "16",
                    _groupHover: {
                        color: "white"
                    },
                    as: icon
                }),
                children
            ]
        })
    });
};
const MobileNav = ({ onOpen , ...rest })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        ml: {
            base: 0,
            md: 60
        },
        px: {
            base: 4,
            md: 24
        },
        height: "20",
        alignItems: "center",
        // bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth: "1px",
        borderBottomColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.200", "gray.700"),
        justifyContent: "flex-start",
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                variant: "outline",
                onClick: onOpen,
                "aria-label": "open menu",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiMenu, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                fontSize: "2xl",
                ml: "8",
                fontFamily: "monospace",
                fontWeight: "bold",
                children: "poweredby.ai"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 307:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SubmitButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function SubmitButton(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        justifyContent: "right",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
            ...props,
            size: "sm",
            p: 4,
            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("#151f21", "gray.900"),
            color: "white",
            rounded: "md",
            _hover: {
                transform: "translateY(-2px)",
                boxShadow: "lg"
            },
            children: "Submit a product"
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ getAllProducts)
});

// UNUSED EXPORTS: sendSubmission

;// CONCATENATED MODULE: external "airtable"
const external_airtable_namespaceObject = require("airtable");
var external_airtable_default = /*#__PURE__*/__webpack_require__.n(external_airtable_namespaceObject);
;// CONCATENATED MODULE: ./lib/airtable.ts

external_airtable_default().configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: process.env.AIRTABLE_API_KEY
});
const base = external_airtable_default().base(process.env.AIRTABLE_BASE_ID);
async function getAllProducts() {
    const products = await new Promise((resolve, reject)=>{
        const products = [];
        const select = {
            filterByFormula: ``,
            offset: 0
        };
        base("products").select(select).eachPage((records, fetchNextPage)=>{
            records.map((record)=>{
                let attachments = record.get("images");
                products.push({
                    name: record.get("name"),
                    link: record.get("link") || null,
                    creator: record.get("creator") || null,
                    summary: record.get("summary") || null,
                    description: record.get("description") || null,
                    images: attachments.map((img)=>img.url) || [],
                    postedAt: record.get("postedAt"),
                    tags: record.get("tags") || []
                });
            });
            fetchNextPage();
        }, function done(err) {
            if (err) {
                console.error(err);
                reject();
                return;
            }
            resolve(products);
        });
    });
    return products;
}
async function sendSubmission({ name , link , description , email  }) {
    const response = await new Promise((resolve, reject)=>{
        const submittedAt = new Date().toISOString();
        base("submissions").create([
            {
                fields: {
                    name,
                    link,
                    description,
                    email,
                    submittedAt
                }
            }
        ], (err, records)=>{
            if (err) {
                reject(err);
                return;
            }
            resolve(records?.map((r)=>r.id));
        });
    });
    console.log(`sendSubmission response: ${JSON.stringify(response)}`);
    return response;
}



/***/ }),

/***/ 75:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Overlay_OverlaySuggestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(862);
/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(187);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(694);
/* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(307);
/* harmony import */ var _lib_airtable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(924);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Overlay_OverlaySuggestion__WEBPACK_IMPORTED_MODULE_1__, _components_ProductList__WEBPACK_IMPORTED_MODULE_2__, _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__, _components_SubmitButton__WEBPACK_IMPORTED_MODULE_4__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__]);
([_components_Overlay_OverlaySuggestion__WEBPACK_IMPORTED_MODULE_1__, _components_ProductList__WEBPACK_IMPORTED_MODULE_2__, _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__, _components_SubmitButton__WEBPACK_IMPORTED_MODULE_4__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







async function getStaticProps() {
    const products = await (0,_lib_airtable__WEBPACK_IMPORTED_MODULE_5__/* .getAllProducts */ .D)();
    return {
        props: {
            products
        },
        revalidate: 60
    };
}
function Home({ products  }) {
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useDisclosure)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SubmitButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    onClick: onOpen
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProductList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    products: products
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Overlay_OverlaySuggestion__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    isOpen: isOpen,
                    onClose: onClose
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 210:
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(75));
module.exports = __webpack_exports__;

})();