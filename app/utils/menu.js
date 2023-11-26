import { list, check, todo, home } from "./Icons";

const menu = [
  {
    id: 1,
    title: "すべてのタスク",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "重要なラスク",
    icon: list,
    link: "/important",
  },
  {
    id: 3,
    title: "まだなタスク",
    icon: todo,
    link: "/incomplete",
  },
  {
    id: 4,
    title: "完了タスク",
    icon: check,
    link: "/completed",
  },
];

export default menu;
