// lib/database.types.ts
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string; // UUID matching auth.users.id
          created_at: string;
          updated_at: string;
          username: string | null;
          full_name: string | null;
          avatar_url: string | null;
          website: string | null;
          organization_id: string | null;
        };
        Insert: {
          id: string;
          created_at?: string;
          updated_at?: string;
          username?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          website?: string | null;
          organization_id?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          username?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          website?: string | null;
          organization_id?: string | null;
        };
      };
      user_sessions: {
        Row: {
          id: string;
          user_id: string;
          created_at: string;
          expires_at: string;
          ip_address: string | null;
          user_agent: string | null;
          is_active: boolean;
        };
        Insert: {
          id?: string;
          user_id: string;
          created_at?: string;
          expires_at: string;
          ip_address?: string | null;
          user_agent?: string | null;
          is_active?: boolean;
        };
        Update: {
          id?: string;
          user_id?: string;
          created_at?: string;
          expires_at?: string;
          ip_address?: string | null;
          user_agent?: string | null;
          is_active?: boolean;
        };
      };
      auth_logs: {
        Row: {
          id: number;
          user_id: string | null;
          action: string;
          created_at: string;
          ip_address: string | null;
          user_agent: string | null;
          metadata: Json | null;
        };
        Insert: {
          id?: number;
          user_id?: string | null;
          action: string;
          created_at?: string;
          ip_address?: string | null;
          user_agent?: string | null;
          metadata?: Json | null;
        };
        Update: {
          id?: number;
          user_id?: string | null;
          action?: string;
          created_at?: string;
          ip_address?: string | null;
          user_agent?: string | null;
          metadata?: Json | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_user_profile: {
        Args: {
          user_id: string;
        };
        Returns: {
          id: string;
          username: string | null;
          avatar_url: string | null;
        }[];
      };
      handle_new_user: {
        Args: {
          user_id: string;
          email: string;
        };
        Returns: void;
      };
    };
    Enums: {
      user_role: 'admin' | 'moderator' | 'user';
      auth_action: 'login' | 'logout' | 'signup' | 'password_reset';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

// Custom JSON type for metadata
export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];