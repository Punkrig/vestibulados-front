import { useState, useContext, FormEvent } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { AuthContext } from '../contexts/AuthContext'
import { toast } from 'react-toastify'

interface LoginModalProps {
  onClose: () => void
}

const Login: React.FC<LoginModalProps> = ({ onClose }) => {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (email === '' || password === '') {
      toast.error("Preencha todos os campos!")
      return
    }

    const data = {
      email,
      password
    }

    const response = await signIn(data)
    console.log(response)

    onClose()
  }

  return (
    <>

      <Dialog open={true} onClose={onClose} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />

        <div className="fixed inset-0 z-10 flex items-center justify-center w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg w-full flex flex-col items-center justify-center"
              style={{ width: '300px', height: '400px' }}
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col items-center">
                <h1 className="font-bold text-center text-2xl mb-10">Vestibulados</h1>
                <div className="sm:flex sm:items-start">

                  <div className="mt-3 text-center sm:mt-0">
                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                      Login
                    </DialogTitle>
                    <div className="mt-10 w-full sm:max-w-sm">
                      <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                          <div className="mt-2">
                            <input
                              placeholder="Email"
                              id="email"
                              name="email"
                              type="email"
                              required
                              autoComplete="email"
                              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="mt-2">
                            <input
                              placeholder="Password"
                              id="password"
                              name="password"
                              type="password"
                              required
                              autoComplete="current-password"
                              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Sign in
                          </button>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">
                              Não tem uma conta? <strong>Cadastre-se</strong>
                            </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default Login
