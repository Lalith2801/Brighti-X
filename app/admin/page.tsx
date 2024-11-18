'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useContent } from '../contexts/ContentContext'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { content, updateContent } = useContent()
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true)
      localStorage.setItem('adminToken', 'dummy-token')
      toast.success('Logged in successfully')
    } else {
      toast.error('Invalid credentials')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('adminToken')
    router.push('/')
  }

  const handleContentChange = (section: string, field: string, value: string) => {
    updateContent({
      ...content,
      [section]: {
        ...content[section as keyof typeof content],
        [field]: value
      }
    })
  }

  const handleServiceChange = (index: number, field: string, value: string) => {
    const updatedServices = content.services.map((service, i) => 
      i === index ? { ...service, [field]: value } : service
    )
    updateContent({
      ...content,
      services: updatedServices
    })
  }

  const handleSave = () => {
    console.log('Saving content:', content)
    toast.success('Content saved successfully')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">Log In</Button>
            </form>
          </CardContent>
        </Card>
        <ToastContainer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Control Panel</h1>
          <Button onClick={handleLogout}>Log Out</Button>
        </div>
        <Tabs defaultValue="home">
          <TabsList className="mb-4">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <Card>
              <CardHeader>
                <CardTitle>Edit Home Page</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">Title</label>
                  <Input
                    value={content.home.title}
                    onChange={(e) => handleContentChange('home', 'title', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Description</label>
                  <Textarea
                    value={content.home.description}
                    onChange={(e) => handleContentChange('home', 'description', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>Edit About Page</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <label className="block mb-2 text-sm font-medium">Content</label>
                  <Textarea
                    value={content.about.content}
                    onChange={(e) => handleContentChange('about', 'content', e.target.value)}
                    rows={6}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Edit Services</CardTitle>
              </CardHeader>
              <CardContent>
                {content.services.map((service, index) => (
                  <div key={index} className="mb-4 p-4 border rounded">
                    <Input
                      value={service.title}
                      onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                      className="mb-2"
                    />
                    <Textarea
                      value={service.description}
                      onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="mt-8">
          <Button onClick={handleSave} className="w-full">Save Changes</Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}