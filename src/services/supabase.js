import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://tqsrwwrzyrbclvovqqmv.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxc3J3d3J6eXJiY2x2b3ZxcW12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNDQ5MjMsImV4cCI6MjAyMDYyMDkyM30.DbtjC_b_I-W_4Nrt2ckRGPr6aOw0-vYeMqQasIInRDs';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
