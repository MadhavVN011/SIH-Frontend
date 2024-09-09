/**
 * v0 by Vercel.
 * @see https://v0.dev/t/w2ECctGG59q
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      <aside className="fixed inset-y-0 left-0 z-10 flex w-64 flex-col border-r bg-background px-4 py-6 sm:static sm:w-auto sm:border-0 sm:px-0">
        <div className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Mentors Connect</span>
        </div>
        <nav className="mt-8 flex flex-col space-y-1">
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            prefetch={false}
          >
            <LinkIcon className="h-5 w-5" />
            Connection
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            prefetch={false}
          >
            <HomeIcon className="h-5 w-5" />
            Home
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            prefetch={false}
          >
            <UsersIcon className="h-5 w-5" />
            Community
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            prefetch={false}
          >
            <MailIcon className="h-5 w-5" />
            Message
          </Link>
        </nav>
        <div className="mt-auto flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <MoonIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Dark Mode</span>
          </Button>
          <Button variant="ghost" size="icon">
            <BellIcon className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <img
                  src="/placeholder.svg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="rounded-full"
                  style={{ aspectRatio: "36/36", objectFit: "cover" }}
                />
                <span className="sr-only">User Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-muted-foreground">john@example.com</div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>
      <main className="flex-1 pt-6 sm:pl-64 sm:pt-0">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            <Button variant="outline" className="col-span-2 sm:col-span-1">
              Developer
            </Button>
            <Button variant="outline" className="col-span-2 sm:col-span-1">
              DSA
            </Button>
            <Button variant="outline" className="col-span-2 sm:col-span-1">
              AI
            </Button>
            <Button variant="outline" className="col-span-2 sm:col-span-1">
              ML
            </Button>
            <Button variant="outline" className="col-span-2 sm:col-span-1">
              Blockchain
            </Button>
            <Button className="col-span-2 sm:col-span-1">Create</Button>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="relative flex-1">
              <div className="absolute left-2 top-2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-md bg-background pl-8 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <Button variant="outline" size="icon" className="ml-4">
              <SearchIcon className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <div className="mt-6 grid gap-4">
            <Card>
              <CardHeader className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-muted-foreground">Student</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  I'm struggling with dynamic programming in DSA. Can someone please help me understand the concepts
                  better?
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon">
                    <HeartIcon className="h-5 w-5" />
                    <span>10</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageCircleIcon className="h-5 w-5" />
                    <span>5</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ShareIcon className="h-5 w-5" />
                    <span>2</span>
                  </Button>
                </div>
                <Button variant="ghost" size="icon">
                  <SendIcon className="h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Amelia Smith</div>
                  <div className="text-sm text-muted-foreground">Student</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  I'm trying to build a machine learning model for image classification. Can anyone provide some
                  guidance on the best approach to take?
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon">
                    <HeartIcon className="h-5 w-5" />
                    <span>15</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageCircleIcon className="h-5 w-5" />
                    <span>8</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ShareIcon className="h-5 w-5" />
                    <span>3</span>
                  </Button>
                </div>
                <Button variant="ghost" size="icon">
                  <SendIcon className="h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Jessica Smith</div>
                  <div className="text-sm text-muted-foreground">Student</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  I'm interested in learning more about blockchain technology. Can anyone recommend some good resources
                  to get started?
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon">
                    <HeartIcon className="h-5 w-5" />
                    <span>8</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageCircleIcon className="h-5 w-5" />
                    <span>3</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ShareIcon className="h-5 w-5" />
                    <span>1</span>
                  </Button>
                </div>
                <Button variant="ghost" size="icon">
                  <SendIcon className="h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function MoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}