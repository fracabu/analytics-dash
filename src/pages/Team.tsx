import React from 'react';
import { User, Mail, Phone } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Analytics Manager',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Data Scientist',
    email: 'jane@example.com',
    phone: '+1 234 567 891',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces'
  },
];

export function Team() {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}