import{G as m,U as f,r as u,j as t,a as l,T as h,C as p,R as y,b as g}from"./vendor.d50b992a.js";const b=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}};b();const o={strings:6,fretsOnChord:4,name:"Guitar",keys:[],tunings:{standard:["E","A","D","G","B","E"]}},d={strings:4,fretsOnChord:4,name:"Ukulele",keys:[],tunings:{standard:["G","C","E","A"]}},v=Object.values(m.chords).flatMap(s=>s),C=Object.values(f.chords).flatMap(s=>s);function N(){const[s,i]=u.exports.useState(o),[a,n]=u.exports.useState([]);return t("div",{children:l("div",{className:"page-wrapper",children:[t("header",{className:"pt-5 pb-4 border-bottom",children:l("div",{className:"container",children:[t("div",{className:"d-flex",children:t("h1",{children:"Chords Viewer"})}),l("div",{className:"row",children:[l("div",{className:"col-md mt-2",children:[s===o&&t(h,{multiple:!0,placeholder:"Select a chord...",options:v,highlightOnlyResult:!0,labelKey:e=>`${e.key}${e.suffix}`,onChange:e=>{n(e)}}),s===d&&t(h,{multiple:!0,placeholder:"Select a chord...",options:C,highlightOnlyResult:!0,labelKey:e=>`${e.key}${e.suffix}`,onChange:e=>{n(e)}})]}),l("div",{className:"col-md mt-2 d-flex justify-content-end align-items-start",children:[t("button",{className:`btn mr-2 ${s===o?"btn-primary":"btn-light"}`,onClick:()=>{n([]),i(o)},children:"Guitar"}),t("button",{className:`btn ${s===d?"btn-primary":"btn-light"}`,onClick:()=>{n([]),i(d)},children:"Ukulele"})]})]})]})}),t("main",{className:"row p-5 container-fluid text-center justify-content-center",children:a.map(e=>l("div",{className:"col-sm chord",children:[l("h2",{children:[e.key,t("sub",{children:e.suffix})]}),t(p,{chord:e.positions[0],instrument:s})]}))})]})})}y.render(t(g.StrictMode,{children:t(N,{})}),document.getElementById("root"));