import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Button} from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { AvatarFallback } from './ui/avatar';
import {LinkIcon, LogOut} from "lucide-react";




const Header = () => {
    const navigate =  useNavigate()
    const user = true;

  return (
  <nav className='py-4 flex justify-between items-center'>
     <Link to="/">
        <img src="/logo.png" className="h-16" alt="Trimmer logo"/>
    </Link>

    <div>
        {!user ?(
        <Button onClick={() => navigate("/auth")}>Login</Button>

            ) : (
        <DropdownMenu>
        <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Shivansh Gupta</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
            <Link to="/dashboard" className="flex">
            <LinkIcon className="mr-2 h-4 w-4" />
            My Links
            </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-400">
            <LogOut className="mr- 2 h-4 w-4"/>
            <span> Logout</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
            )
        }
    </div>
</nav>
  )
}

export default Header;