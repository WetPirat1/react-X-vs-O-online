import clsx from "clsx";
import { Profile } from "../profile";
import { CrossIcon } from "./icons/cross-icon";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOLS } from "./constants";

import avatarSrc1 from "./images/avatar-1.png";
import avatarSrc2 from "./images/avatar-2.png";
import avatarSrc3 from "./images/avatar-3.png";
import avatarSrc4 from "./images/avatar-4.png";

const players = [
  {
    id: 1,
    name: "Paromovevg",
    rating: 1230,
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 1,
    name: "Paromovevg",
    rating: 1230,
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 1,
    name: "Paromovevg",
    rating: 1230,
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 1,
    name: "Paromovevg",
    rating: 1230,
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
];

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 flex justify-between"
      )}
    >
      {players.map((player) => (
        <PlayerInfo key={player.id} playerInfo={player} />
      ))}
      <PlayerInfo />
    </div>
  );
}

function PlayerInfo({ playerInfo }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="relative">
        <Profile
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
          className="w-44"
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div className="h-6 w-px bg-slate-200" />
      <div className="text-slate-900 text-lg font-semibold">01:08</div>
    </div>
  );
}
